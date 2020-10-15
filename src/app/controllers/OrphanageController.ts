import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import OrphanageModel from '../models/Orphanage';

class OrphanageController {
  async index(req: Request, res: Response) {
    const orphanageRepository = getRepository(OrphanageModel);

    const orphanages = await orphanageRepository.find();

    res.json(orphanages);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const orphanageRepository = getRepository(OrphanageModel);


    const orphanage = await orphanageRepository.findOneOrFail(id);

    res.json(orphanage);
  }
  
  async store(req: Request, res: Response) {
    const { 
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanageRepository = getRepository(OrphanageModel);

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename };
    })

    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanageRepository.save(orphanage);

    res.status(201).json(orphanage);
  }
}

export default new OrphanageController();