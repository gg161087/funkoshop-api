import { Router } from 'express';

import authController from './../controllers/authController.js';

const router = Router();

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);

export default router;