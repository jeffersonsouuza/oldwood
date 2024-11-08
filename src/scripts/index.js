import '../styles/sass/style.scss';
import {
  saveCookieLocalStorage,
  getCookieLocalStorage,
  displayCookie,
} from './modules/cookie-consent.js';
import AnimaNumeros from './modules/AnimaNumeros.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
});

// import * as bootstrap from 'bootstrap';

// Validate Input
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// Cookie Warning
const alertCookie = document.querySelector('.alert-cookie');
document.addEventListener('DOMContentLoaded', () => {
  getCookieLocalStorage()
    ? displayCookie(alertCookie, 'none')
    : displayCookie(alertCookie);
});

document.getElementById('cookie-deny').addEventListener('click', () => {
  saveCookieLocalStorage();
  displayCookie(alertCookie, 'none');
});

document.getElementById('cookie-accept').addEventListener('click', () => {
  saveCookieLocalStorage('true');
  displayCookie(alertCookie, 'none');
});

// Animated Numbers
document.querySelectorAll('.number').forEach((element) => {
  new AnimaNumeros(element);
});