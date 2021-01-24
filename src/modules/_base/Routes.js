import { Router } from 'express';
import create from './controllers/create';
import search from './controllers/search';
import update from './controllers/update';
import deleteById from './controllers/deleteById';
import deleteAll from './controllers/deleteAll';
import getById from './controllers/getById';

const router = Router();

router.post('/', create);
router.post('/search', search); // POST localhost:5000/base/search
router.get('/:userId', getById);
router.delete('/:userId', deleteById);
router.patch('/:userId', update);
router.delete('/', deleteAll);

export default router;
