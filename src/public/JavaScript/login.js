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
    fetch('/api/sessions/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Login successfully. Redirecting to private page...')
          window.location.href = '/static/me.html'
        } else {
          alert(data.message);
        }
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  });

})();