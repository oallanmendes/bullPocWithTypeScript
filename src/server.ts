import 'dotenv/config';

import express from 'express';
import { UI, setQueues } from 'bull-board';
import {Queue} from 'bullmq'

import redisConfig from './config/redis';

import CreateUserService from './services/CreateUserService';

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(port, ()=> console.log(`Server running on port: ${port}! 🚀`));

app.use('/admin/queues', UI);

app.post('/sendEmail', CreateUserService.createUser)