import emailjs from '@emailjs/browser';

console.log('EmailJS loaded!');

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submit = document.getElementById('submitButton');

const serviceID = 'service_1ec60zn'; // Ganti dengan service ID Anda
const templateID = 'template_n578sun'; // Ganti dengan template ID Anda
const publicKey = 'sAetfKVf0mc6j51rA'; // Ganti dengan public key Anda

const sendEmail = (name, email, message) => {
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.init(publicKey);

  emailjs.send(serviceID, templateID, templateParams).then(
    (result) => {
      console.log('Email sent!', result.status, result.text);
    },
    (error) => {
      console.log('Email failed to send:', error);
    }
  );
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  sendEmail(name, email, message);

  alert('Your message has been sent!');
});
