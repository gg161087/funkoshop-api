import { Router } from 'express';

const router = Router();

import productController from './../controllers/productController.js';

router.get('/:product_id', productController.getProduct);
router.get('/licence/:licence_id', productController.getProductsByLicence);
router.get('/', productController.getProducts);

export default router;