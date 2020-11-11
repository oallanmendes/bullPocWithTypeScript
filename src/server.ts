import 'dotenv/config';
import express from 'express';

import CreateUserService from './services/CreateUserService';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.listen(port, ()=> console.log(`Server running on port: ${port}! 🚀`));

app.get('/', (request, response) => {
  return response.json({message: 'Ok'})
})
app.post('/sendEmail', CreateUserService.createUser)