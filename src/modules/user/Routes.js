import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';

const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById);
router.patch('/:userId', userUpdateById);
router.patch('/:userId', userDeleteById);

export default router;
