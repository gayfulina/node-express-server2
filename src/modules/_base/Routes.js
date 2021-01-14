import { Router } from 'express';
import create from './controllers/create';
import getAll from './controllers/getAll';
import udateById from './controllers/udateById';
import deleteById from './controllers/deleteById';
import deleteAll from './controllers/deleteAll';

const router = Router();

router.post('/', create);
router.post('/', getAll);
router.post('/', udateById);
router.post('/', deleteById);
router.post('/', deleteAll);

export default router;
