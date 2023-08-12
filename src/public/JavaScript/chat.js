(function (){
    const socket = io();
    
    const formMessage = document.getElementById('form-message');
    const inputMessage = document.getElementById('input-message');
    const listMessages = document.getElementById('list-messages');
    fetch('/api/sessions/me')
    .then(res => res.json())
    .then(data => {
      formMessage.addEventListener('submit', (event) => {
      event.preventDefault();
      const dato = {
        nombre: data.payload.fullname,
        mensaje: inputMessage.value,
      };
      socket.emit('new-message', dato);
      inputMessage.value = '';
      inputMessage.focus();
    });
    })

    function showMessage(dato) {
      const li = document.createElement('li');
      li.className = "list-group-item";
      li.innerHTML = `<p><strong>${dato.nombre}</strong>: ${dato.mensaje}</p>`;
      listMessages.appendChild(li);
    }
    socket.on('connect', () => {
      console.log('Conectados al servidor');
    });

  
    socket.on('notification', (dato) => {
      showMessage(dato);
    });
  
})();