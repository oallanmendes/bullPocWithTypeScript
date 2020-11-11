import { Request, Response } from 'express';
// import { hash } from 'bcrypt';

import mailQueue from '../libs/mailQueue';

export default {
  async createUser (request:Request, response:Response) {
    const { name, email, password } = request.body;
  
    const user = {
      name,
      email,
      password,
    }

    console.log('Enviado para fila')
    await mailQueue.add('RegistrationMail', {data: user});

    return response.json(user)
  }
}