(function(){
    const form = document.getElementById('form')
    const email = document.getElementById('nameOfTheRestaurant');
    const id = document.getElementById('id');
    const menu = document.getElementById('menu');
    const price = document.getElementById('price');
    const image = document.getElementById('formFile');
    email.onchange = () => {};
    menu.onchange = () => {};
    form.addEventListener('submit', async (event) =>{
        event.preventDefault()
        const data = {
            name: email.value,
            image: image.value,
            products:[
                {
                    id:id.value,
                    menu:menu.value,
                    price:price.value,
                }
            ]
          }
    console.log("data:", data)
    fetch('/api/sessions/business', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            /*.then((response) => response.json())
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
            });*/
        console.log("data:", data)
    })
})();
