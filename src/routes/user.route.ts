import { Router } from 'express';
import { userControllers } from '../controllers/user.controller';
import { validateRequest } from '../middlewares/validateRequest';
import { userValidationSchema } from '../validations/user.validation';

const router = Router();

router.post(
  '/register',
  validateRequest(userValidationSchema),
  userControllers.registerUser,
);
router.post('/login', userControllers.loginUser);

export const UserRoutes = router;
