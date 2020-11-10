import { Worker } from 'bullmq';
import Mail from './libs/mail';

import RegistrationMail from './jobs/RegistrationMail';

const worker = new Worker(RegistrationMail.key, async job => {
  try {
    await Mail.sendMail({
      from: 'Allan Mendes <oallanmendes@gmail.com>',
      to: `${job.data.data.name} <${job.data.data.email}>`,
      subject: 'Cadastro concluído',
      html: `Olá ${job.data.data.name}, testando Bull Poc`
    })
  } catch (error) {
    console.log(error)
  }
}, 
);

worker.on('completed', (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('drained', (job) => {
  console.log('Mais nenhum processo em fila')
})