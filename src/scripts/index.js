import '../styles/sass/style.scss';
import {
  saveCookieLocalStorage,
  getCookieLocalStorage,
  displayCookie,
} from './modules/cookie-consent.js';

import * as bootstrap from 'bootstrap';

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
