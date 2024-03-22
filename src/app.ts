import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import validateAuth from './middlewares/validateAuth';
import { USER_ROLE } from './constants/user.constant';

const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

// default route
app.get('/', validateAuth(USER_ROLE.admin), (req: Request, res: Response) => {
  console.log(req.user);
  res.send('Hello World!');
});

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
