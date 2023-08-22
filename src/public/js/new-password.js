(function() {
    const formLogin = document.getElementById('form-login');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    inputEmail.onchange = () => {};
    inputPassword.onchange = () => {};
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = {
        email: inputEmail.value,
        password: inputPassword.value,
      };
      fetch('/api/sessions/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    });
  
  })();