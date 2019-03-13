'use strict';

function viewPassword() {
  let passwordInput = document.getElementById('password');
  let passStatus = document.getElementById('pass-status');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passStatus.className = 'fa fa-eye-slash field-icon';
  } else {
    passwordInput.type = 'password';
    passStatus.className = 'fa fa-eye field-icon';
  }
}