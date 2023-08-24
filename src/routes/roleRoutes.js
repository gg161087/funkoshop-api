import { Router } from 'express';

const router = Router();

import roleController from './../controllers/roleController.js';

router.get('/:role_id', roleController.getRole);
router.get('/', roleController.getRoles);
router.post('/', roleController.createRole);
router.put('/:role_id', roleController.updateRole);
router.delete('/:role_id', roleController.deleteRole);

export default router;