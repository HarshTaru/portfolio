// src/utils/sendEmail.js
import emailjs from '@emailjs/browser';

export const sendEmail = async ({ name, email, message }) => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    title:"New Portfolio Mail",
    name: name,
    email: email,
    message,
  };

  try {
    const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};


emailjs.send("service_59hftzf","template_qjc9f1l",{
title: "test",
name: "harsh",
message: "hi this is a test mail",
email: "tarusapna@gmail.com",
});