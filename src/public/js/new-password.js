(function() {
    const formLogin = document.getElementById('form-login');
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password');
    inputPassword.onchange = () => {};
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = {
        email: inputEmail,
        password: inputPassword.value,
      };
      console.log('data',data)
      fetch('/api/sessions/new-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    });
  
  })();