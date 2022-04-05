import express from 'express';
import userRoute from './user';
import authRoute from './auth';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/auth',
    route: authRoute
  }
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
