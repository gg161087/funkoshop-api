import { Router } from 'express';

const router = Router();

import licenceController from './../controllers/licenceController.js';

router.get('/:licence_id', licenceController.getLicence);
router.get('/', licenceController.getLicences);

export default router;