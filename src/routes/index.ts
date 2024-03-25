import { Router } from 'express';
import { UserRoutes } from './user.route';
import { PackageRoutes } from './package.route';
import { CryptoRoutes } from './crypto.route';

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
  {
    path: '/cryptos',
    route: CryptoRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
