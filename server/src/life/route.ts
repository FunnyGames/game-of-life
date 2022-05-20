import express from 'express';
const router = express.Router();

import * as controller from './controller';
import * as validator from './validator';

router.post('/new', validator.newGame, controller.newGame);
router.get('/next', controller.nextMove);
router.get('/reset', controller.resetGame);

export default router;