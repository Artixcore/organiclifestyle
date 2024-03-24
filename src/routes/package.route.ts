import { Router } from 'express';
import { PackageControllers } from '../controllers/package.controller';

const router = Router();

router.post('/create', PackageControllers.createPackage);
router.get('/', PackageControllers.getAllPackages);
router.patch('/update/:packageId', PackageControllers.updatePackage);
router.patch('/delete/:packageId', PackageControllers.deletePackage);

export const PackageRoutes = router;
