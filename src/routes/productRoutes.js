import { Router } from 'express';

import productController from './../controllers/productController.js';

const router = Router();

router.get('/', productController.getProducts);
router.get('/licence/:licence_id', productController.getProductsByLicence);
router.get('/:product_id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:product_id', productController.updateProduct);
router.delete('/:product_id', productController.deleteProduct);

export default router;