const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
}

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onInputChange, 500))
refs.form.addEventListener('submit', onFormSubmit)
let message = {};
populateMessage();

function onInputChange(e) { 
    message[e.target.name] = e.target.value;
    const messageStringify = JSON.stringify(message);
    localStorage.setItem(STORAGE_KEY, messageStringify)
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(message);
}

function populateMessage() {
const savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        message = JSON.parse(savedMessage);
        if (message.email) {
            refs.email.value = message.email;
        }
        if (message.message) {
            refs.textarea.value = message.message;
        }
    }
}