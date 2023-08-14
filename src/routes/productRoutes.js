import { Router } from 'express';

const router = Router();

import productController from './../controllers/productController.js';

router.get('/:id', productController.getProduct);
router.get('/', productController.getProducts);

export default router;