import { Router } from 'express';

const router = Router();

import userController from './../controllers/userController.js';

router.get('/:user_id', userController.getUser);
router.get('/', userController.getUsers);

export default router;