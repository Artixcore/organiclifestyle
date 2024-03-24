import { Router } from 'express';
import { UserRoutes } from './user.route';
import { PackageRoutes } from './package.route';

const router = Router();

const routes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/packages',
    route: PackageRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
