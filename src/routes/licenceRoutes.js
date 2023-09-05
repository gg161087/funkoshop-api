import { Router } from 'express';

import licenceController from './../controllers/licenceController.js';

const router = Router();

router.get('/', licenceController.getLicences);
router.get('/:licence_id', licenceController.getLicence);
router.post('/', licenceController.createLicence);
router.put('/:licence_id', licenceController.updateLicence);
router.delete('/:licence_id', licenceController.deleteLicence);

export default router;