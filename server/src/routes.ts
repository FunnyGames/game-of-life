import express from 'express';
const router = express.Router();

router.use('/life', require('./life/route').default);

export default router;