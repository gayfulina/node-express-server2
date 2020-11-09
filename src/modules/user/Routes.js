import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdatetById';

const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById);
router.patch('/:userId', userUpdateById);

export default router;
