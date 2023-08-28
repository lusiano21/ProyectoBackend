(function (){
    const btnBuy = document.getElementById('buttons')
    fetch('/api/sessions/me')
    .then(res => res.json())
    .then(data => {
        if(data.success){
            if(data.payload.rol){
                btnBuy.innerHTML = `
                <a href="#" class="btn btn-outline-primary" type="button">Comprar</a>
                `
                }
        } else {
            btnBuy.innerHTML = `
            <a href="#" class="btn btn-outline-primary" type="button">Ver</a>
            `
        }
    })
})();