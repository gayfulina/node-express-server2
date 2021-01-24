import { Router } from 'express';
import create from './controllers/create';
import search from './controllers/search';
import update from './controllers/update';
import deleteById from './controllers/deleteById';

const router = Router();

router.post('/', create);
router.post('/search', search); // POST localhost:5000/base/search
router.delete('/:baseId', deleteById);
router.patch('/:baseId', update);

export default router;
