import { Router } from 'express';

import roleController from './../controllers/roleController.js';

const router = Router();

router.get('/', roleController.getRoles);
router.get('/:role_id', roleController.getRole);
router.post('/', roleController.createRole);
router.put('/:role_id', roleController.updateRole);
router.delete('/:role_id', roleController.deleteRole);

export default router;