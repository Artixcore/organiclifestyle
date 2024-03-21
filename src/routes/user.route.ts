import { Router } from 'express';
import { userControllers } from '../controllers/user.controller';
import validateRequest from '../middlewares/validateRequest';
import { UserValidations } from '../validations/user.validation';

const router = Router();

router.post(
  '/register',
  validateRequest(UserValidations.registerSchema),
  userControllers.registerUser,
);
router.post(
  '/login',
  validateRequest(UserValidations.loginSchema),
  userControllers.loginUser,
);

export const UserRoutes = router;
