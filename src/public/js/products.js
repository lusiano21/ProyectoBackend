let trolley = [];
let trolleyList = document.getElementById("trolley-list")
const btnbuy = document.getElementById("buy")
function addCartToTrolley(event){
    trolley.push(event.target.getAttribute("mark"))
        renderTrolley()
        Toastify({
                text: "Se agrago al Carrito",
                className:"info",
                style: {
                    background: "linear-gradient(to right, #00c1a9, #559f93)",
                }
            }).showToast();
    }
    function calculoTotal(){
        return trolley.reduce((total, ItemId) =>{
            let item = productos.filter((el) => {
                return el.id === parseInt(ItemId) 
            })    
            return total + item[0].precio
        }, 0) 
        
    }
    function renderTrolley(){
        //saveCartToStorage()
        //saveTrolley()
        trolleyList.innerHTML = ""
        let cartWhithoudRepeatedElements = [...new Set(trolley)]
        cartWhithoudRepeatedElements.forEach((itemId) => {
            let item = productos.filter ((producto) => {
                return producto.id === parseInt(itemId)
            })
            let quantity = trolley.reduce((total, id) => {
                return id === itemId ? total += 1 : total
            }, 0)
            let linea = document.createElement("li");
            linea.className = "list-group-item cartToCarr "
            linea.innerHTML = `<div class="d-flex justify-content-between align-items-start">
                           <div class="ms-2 me-auto">
                           <div class="fw-bold">${item[0].producto}</div>
                           ${item[0].precio}$
                           </div>
                           <span class="badge bg-primary rounded-pill">${quantity}</span>
                           </div>`
                           let contbutoonD = document.createElement("div")
        let buttonDelete = document.createElement("button")
        buttonDelete.className = "btn-c"
        buttonDelete.innerText = "Eliminar"
        buttonDelete.dataset.item = itemId
        buttonDelete.addEventListener("click", deleteCart)
        contbutoonD.append(buttonDelete)
        linea.append(contbutoonD)
        trolleyList.append(linea)
    })
    valueTotalList.innerHTML = calculoTotal()+"$"
}
btnbuy.addEventListener("click",() => {console.log('Funciona')})
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