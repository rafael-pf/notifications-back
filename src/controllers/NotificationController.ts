import { Request, Response, NextFunction } from 'express';
import { NotificationService } from 'src/services';

class NotificationController {
  async sendNotification(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, title, body } = req.body;

      const notificationSent = await NotificationService.sendNotification(
        token,
        title,
        body,
      );

      if (!notificationSent) {
        return next({
          status: 500,
          message: 'Error sending notification',
        });
      }

      res.locals = {
        status: 200,
        message: 'Notification sent successfully',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new NotificationController();
