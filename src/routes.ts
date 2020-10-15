import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/upload';
import OrphanageController from './app/controllers/OrphanageController';

const router = Router();
const upload = multer(multerConfig);

router.get('/orphanages', OrphanageController.index);
router.get('/orphanages/:id', OrphanageController.show);
router.post('/orphanages', upload.array('images') ,OrphanageController.store);

export default router;