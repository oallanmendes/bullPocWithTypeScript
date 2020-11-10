import 'dotenv/config';
import express from 'express';

import CreateUserService from './services/CreateUserService';

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(port, ()=> console.log(`Server running on port: ${port}! 🚀`));

app.post('/sendEmail', CreateUserService.createUser)