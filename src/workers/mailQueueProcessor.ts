import { Worker } from 'bullmq';
import Mail from '../libs/mail';

const worker = new Worker('RegistrationMail', async job => {
  try {
    console.log('Recebido pela fila')
    await Mail.sendMail({
      from: 'Allan Mendes 2 <oallanmendes2@gmail.com>',
      to: `${job.data.data.name} <${job.data.data.email}>`,
      subject: 'Cadastro concluído',
      html: `Olá ${job.data.data.name}, testando Bull Poc </br> ${new Date}`
    })
  } catch (error) {
    console.log(`${job.id} falhou com o erro ${error}`)
  }
}, 
);

worker.on('completed', (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('drained', (job) => {
  console.log('Mais nenhum processo em fila')
})