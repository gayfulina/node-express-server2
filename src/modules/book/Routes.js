import { Router } from 'express';
import create from './controllers/create';
import search from './controllers/search';
import updateById from './controllers/updateById';
import deleteById from './controllers/deleteById';

const router = Router();

router.post('/', create);
router.post('/search', search); // POST localhost:5000/book/search
router.delete('/:userId', deleteById);
router.patch('/:userId', updateById);


export default router;
