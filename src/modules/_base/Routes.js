import { Router } from 'express';
import create from './create';
import getAll from './getAll';
import udateById from './udateById';
import deleteById from './deleteById';
import deleteAll from './deleteAll';

const router = Router();

router.post('/', create);
router.post('/', getAll);
router.post('/', udateById);
router.post('/', deleteById);
router.post('/', deleteAll);

export default router;
