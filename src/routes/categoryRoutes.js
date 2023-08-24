import { Router } from 'express';

const router = Router();

import categoryController from './../controllers/categoryController.js';

router.get('/:category_id', categoryController.getCategory);
router.get('/', categoryController.getCategories);

export default router;