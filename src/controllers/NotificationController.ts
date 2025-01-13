import { Request, Response, NextFunction } from 'express';
import { NotificationService } from 'src/services';

class NotificationController {
  async sendNotification(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, title, body } = req.body;

      await NotificationService.sendNotification(token, title, body);

      res.status(200).json({ message: 'Notification sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending notification' });
    }
  }
}

export default new NotificationController();
