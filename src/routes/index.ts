import { Router } from 'express';

import UserRouter from './UserRoutes';
import AuthRouter from './AuthRoutes';
import FileRouter from './FileRoutes';
import NotificationRouter from './NotificationRoutes';

const router = Router();

router.use('/user', UserRouter);
router.use('/sessions', AuthRouter);
router.use('/file', FileRouter);
router.use('/notification', NotificationRouter);
router.route('/').get((_, res) => {
  res.status(200).send('Made with 💚 and &lt; &#x0002F; &gt; by CITi');
});

export default router;
