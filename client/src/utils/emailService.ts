import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_opulentts';
const EMAILJS_TEMPLATE_ID = 'template_g8ste8t';
const EMAILJS_PUBLIC_KEY = '24g6-AnSpQnBKYHPA';

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (form: HTMLFormElement): Promise<void> => {
  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};