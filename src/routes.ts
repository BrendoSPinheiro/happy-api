import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
  res.json({OK: true});
})

export default router;