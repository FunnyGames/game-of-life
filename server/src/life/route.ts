import express from 'express';
const router = express.Router();

import * as controller from './controller';
import * as validator from './validator';

router.post('/next', validator.nextMove, controller.nextMove);

export default router;