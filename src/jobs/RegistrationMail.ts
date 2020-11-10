import Mail from '../libs/mail';

interface IEmailDTO {
  data: {
    name: string;
    email: string;
  }
}

export default {
  key: 'RegistrationMail',
  async handle({ data } : IEmailDTO) {
    await Mail.sendMail({
      from: 'Allan Mendes <oallanmendes@gmail.com>',
      to: `${data.name} <${data.email}>`,
      subject: 'Cadastro concluído',
      html: `Olá ${data.name}, testando Bull Poc`
    })
    console.log('Email enviado')
  }
}