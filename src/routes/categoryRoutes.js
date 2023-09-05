import { Router } from 'express';

import categoryController from './../controllers/categoryController.js';

const router = Router();

router.get('/', categoryController.getCategories);
router.get('/:category_id', categoryController.getCategory);
router.post('/', categoryController.createCategory);
router.put('/:category_id', categoryController.createCategory);
router.delete('/:category_id', categoryController.deleteCategory);

export default router;