(function (){
    const btnBuy = document.getElementById('buttons')
    fetch('/api/sessions/me')
    .then(res => res.json())
    .then(data => {
        if(data.success){
            btnBuy.innerHTML = `
            <a href="#" class="btn btn-outline-primary" type="button">Comprar</a>
            `
        }
    })
})();