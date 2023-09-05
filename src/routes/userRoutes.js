import { Router } from 'express';

import userController from './../controllers/userController.js';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:user_id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

export default router;