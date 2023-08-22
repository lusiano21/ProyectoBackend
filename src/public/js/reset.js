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
      .then((data) => console.log(data))
      
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  
  })();