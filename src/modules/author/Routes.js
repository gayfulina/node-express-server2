import { Router } from 'express';
import create from './controllers/create';
import search from './controllers/search';
import update from './controllers/update';
import deleteById from './controllers/deleteById';

const router = Router();

router.post('/', create);
router.post('/search', search); // POST localhost:5000/author/search
router.delete('/:authorId', deleteById);
router.patch('/:authorId', update);

export default router;
