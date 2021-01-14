import { Router } from 'express';
import create from './controllers/create';
import getAll from './controllers/getAll';
import updateById from './controllers/updateById';
import deleteById from './controllers/deleteById';
import deleteAll from './controllers/deleteAll';
import getById from './controllers/getById';

const router = Router();

router.post('/', create);
router.post('/', getAll);
router.post('/', updateById);
router.post('/', deleteById);
router.post('/', deleteAll);
router.post('/', getById);

export default router;
