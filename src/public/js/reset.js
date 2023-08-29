(function() {
    const formLogin = document.getElementById('form-login');
    const inputEmail = document.getElementById('email');
    inputEmail.onchange = () => {};
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = {
        email: inputEmail.value,
      };
      fetch('/api/sessions/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Toastify({
            text: "Te enviamos un correo para cambiar la contraseña",
            className:"info",
            style: {
              background: "linear-gradient(to right, #00c1a9, #559f93)",
            }
          }).showToast();
        } else {
          Toastify({
            text:  `${data.message}`,
            className:"info",
            style: {
              background: "linear-gradient(to right, #00c1a9, #559f93)",
            }
          }).showToast();
        }
      })
      
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  
  })();