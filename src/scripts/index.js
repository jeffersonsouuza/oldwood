import '../styles/sass/style.scss';
import {
  saveCookieLocalStorage,
  getCookieLocalStorage,
  displayCookie,
} from './modules/cookie-consent.js';
import AnimaNumeros from './modules/AnimaNumeros.js';
import {
  maskPhoneNumber,
  preventMaliciousInput,
} from './modules/validate-form.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
});

import * as bootstrap from 'bootstrap';

// Popover Bootstrap
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl);
});

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

//Button back to top
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  const headerBg = document.querySelector('.header-bg');

  function toggleBackToTop() {
    const headerRect = headerBg.getBoundingClientRect();
    if (headerRect.bottom < 0) {
      backToTop.classList.remove('d-none');
    } else {
      backToTop.classList.add('d-none');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Form Validation
document.getElementById('phone').addEventListener('input', maskPhoneNumber);

document.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', preventMaliciousInput);
});
