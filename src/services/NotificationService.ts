import * as admin from 'firebase-admin';

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

class NotificationService {
  async sendNotification(token: string, title: string, body: string) {
    const messaging = admin.messaging(app);

    try {
      await messaging.send({
        token,
        notification: {
          title,
          body,
        },
      });

      console.log('Notification sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending notification:', error);
      return false;
    }
  }
}

export default new NotificationService();
