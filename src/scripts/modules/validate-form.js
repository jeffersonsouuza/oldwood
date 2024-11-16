function maskPhoneNumber(element) {
  let value = element.target.value.replace(/\D/g, '');
  if (value.length > 10) value = value.slice(0, 10);
  if (value.length > 6) {
    value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
  } else if (value.length > 2) {
    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else if (value.length > 0) {
    value = `(${value}`;
  }

  element.target.value = value;
}

function preventMaliciousInput(element) {
  const forbiddenPatterns =
    /[<>/\\'";{}$%^&*`~|]|\b\.(php|exe|js|bat|sh|cmd|py|html|css|sql)\b/gi;
  const input = element.target;

  input.value = input.value
    .replace(forbiddenPatterns, '')
    .replace(/\s+/g, ' ')
    .replace(/^\s+/g, '');
}

export { maskPhoneNumber, preventMaliciousInput };
