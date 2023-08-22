(function () {
  const avatar = document.getElementById('avatar');
  const button = document.getElementById('sign-out');
  const profile = document.getElementById('profile');
  const footer = document.getElementById('footer');
  
  fetch('/api/sessions/me')
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        avatar.innerHTML = `
        <div><h2><strong>${data.payload.fullname}</strong></h2>
        </div>
        <div><img class="avatar" src="${data.payload.avatar}" alt="avatar">
        </div>
        `
        profile.innerHTML = `
        <div class="cart-info">
            <p><strong>D.N.I.</strong>: ${data.payload.dni}</p>
            <p><strong>Email</strong>: ${data.payload.email}</p>
            <p><strong>Rol</strong>: ${data.payload.rol}</p>
        </div>`
        if(data.payload.rol === 'admin'){
        footer.innerHTML = `<a href="/create" type="button" class="btn btn-outline-primary">Crear Productos</a>
        `;
        }
      } else {
        alert('You are not authorized to view this page. Redirecting to login page...');
        window.location.href = '/static/login.html';
      }
    });
  
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    fetch('/api/sessions/sign-out', { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Sign out successfully. Redirecting to login page...');
          window.location.href = '/static';
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      });
  });

})();