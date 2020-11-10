import { Request, Response } from 'express';
import { hash } from 'bcrypt';

import mailQueue from '../libs/queue';

import RegistrationMail from '../jobs/RegistrationMail';

export default {
  async createUser (request:Request, response:Response) {
    const { name, email, password } = request.body;
  
    const user = {
      name,
      email,
      password: await hash(password, 10),
    }

    // adicionar job RegistrationMail na fila
    await mailQueue.add(RegistrationMail.key, {data: user});

    return response.json(user)
  }
}