import { Router } from 'express';
import { NotificationController } from '../controllers';

const notificationRouter = Router();

notificationRouter.post('/send', NotificationController.sendNotification);

export default notificationRouter;
