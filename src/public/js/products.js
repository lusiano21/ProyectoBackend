(function (){
    const btnBuy = document.getElementById('buttons')
    fetch('/api/sessions/me')
    .then(res => res.json())
    .then(data => {
        if(data.sucess){
            btnBuy.innerHTML = `
            <a class="btn btn-outline-primary" type="button">Comprar</a>
            `
        }
    })
})();