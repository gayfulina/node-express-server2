import { Router } from 'express';
import create from './controllers/create';
import getAll from './controllers/getAll';
import updateById from './controllers/updateById';
import deleteById from './controllers/deleteById';
import deleteAll from './controllers/deleteAll';
import getById from './controllers/getById';

const router = Router();

router.post('/', create);
router.get('/', getById);
router.get('/', getAll);
router.patch('/', updateById);
router.delete('/', deleteById);
router.delete('/', deleteAll);

export default router;
