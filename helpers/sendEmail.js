const sgMail = require('@sendgrid/mail')

const { SENDGRID_KEY } = process.env

sgMail.setApiKey(SENDGRID_KEY)

const sendEmail = async (data) => {
  const email = { ...data, from: 'businka_olya2008@ukr.net' };
  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = sendEmail;
