function saveCookieLocalStorage(option = 'false') {
  const expirationTime = Date.now() + 3 * 60 * 60 * 1000;
  const data = {
    value: option,
    expiresAt: expirationTime,
  };
  localStorage.setItem('cookies_accepted', JSON.stringify(data));
}

function getCookieLocalStorage() {
  const data = JSON.parse(localStorage.getItem('cookies_accepted'));

  if (data) {
    if (Date.now() > data.expiresAt) {
      localStorage.removeItem('cookies_accepted');
      return null;
    }
    return data.value;
  }

  return null;
}

function displayCookie(classCookie, display = 'block') {
  classCookie.style.display = display;
}

export { saveCookieLocalStorage, getCookieLocalStorage, displayCookie };
