(function() {
    const formLogin = document.getElementById('form-login');
    const inputEmail = document.getElementById('email');
    const notification = document.getElementById('notification')
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
          let mailbox = document.createElement("h4")
          mailbox.innerText =  "Ya te enviamos un correo"
          notification.append(mailbox)
        } else {
          let mailbox = document.createElement("h4")
          mailbox.innerText =`${message}`
          notification.append(mailbox)
        }
      })
      
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  
  })();