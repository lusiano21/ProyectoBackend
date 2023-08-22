(function() {
    const formLogin = document.getElementById('form-login');
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password');
    const inputPassword2 = document.getElementById('password_confir');
    inputPassword.onchange = () => {};
    inputPassword2.onchange = () => {};
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = {
        email: inputEmail,
        password: inputPassword.value,
        password_confir: inputPassword2.value
      };
      fetch('/api/sessions/new-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = '/static/index.html'
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  
  })();