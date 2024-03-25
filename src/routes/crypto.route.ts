import { Router } from 'express';
import { CryptoControllers } from '../controllers/crypto.controller';

const router = Router();

router.get('/top-performing', CryptoControllers.fetchTopPerformingCryptos);
router.get('/latest-positive', CryptoControllers.fetchLatestPositiveCryptos);

export const CryptoRoutes = router;
