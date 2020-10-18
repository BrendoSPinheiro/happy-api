import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import OrphanageModel from '../models/Orphanage';
import OrphanageView from '../views/OrphanageView';

class OrphanageController {
  async index(req: Request, res: Response) {
    const orphanageRepository = getRepository(OrphanageModel);

    const orphanages = await orphanageRepository.find({
      relations: ['images'],
    });

    res.json(OrphanageView.renderMany(orphanages));
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const orphanageRepository = getRepository(OrphanageModel);

    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    res.json(OrphanageView.render(orphanage));
  }

  async store(req: Request, res: Response) {
    const orphanageRepository = getRepository(OrphanageModel);
    const {
      name,
      phone,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image) => ({ path: image.filename }));

    const data = {
      name,
      phone,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanageRepository.create(data);

    await orphanageRepository.save(orphanage);

    res.status(201).json(orphanage);
  }
}

export default new OrphanageController();
