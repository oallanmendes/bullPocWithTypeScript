import { Queue } from 'bullmq';
import redisConfig from '../config/redis';

const mailQueue = new Queue('RegistrationMail', {
  connection: redisConfig,
})

export default mailQueue;