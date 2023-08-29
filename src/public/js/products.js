(function () {
    let trolley = [];
    let productos = []
    const trolleyList = document.getElementById("trolley-list")
    const productsList = document.getElementById("products-list")
    function addCartToTrolley(event) {
        trolley.push(event.target.getAttribute("mark"))
        console.log(event.target.getAttribute("mark"))
        renderTrolley()
        Toastify({
            text: "Se agrago al Carrito",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00c1a9, #559f93)",
            }
        }).showToast();
    }
    function calculoTotal() {
        return trolley.reduce((total, ItemId) => {
            let item = data.payload.filter((el) => {
                return el.id === parseInt(ItemId)
            })
            return total + item[0].precio
        }, 0)

    }
    function renderTrolley() {
        //saveCartToStorage()
        //saveTrolley()
        trolleyList.innerHTML = ""
        let cartWhithoudRepeatedElements = [...new Set(trolley)];
        console.log('trolley',trolley)
        cartWhithoudRepeatedElements.forEach((itemId) => {
            console.log('cartWhithoudRepeatedElements',cartWhithoudRepeatedElements)
            let item = productos.filter((producto) => {
                return producto._id === parseInt(itemId)
            })
            console.log('item', item)
            let quantity = trolley.reduce((total, id) => {
                return id === itemId ? total += 1 : total
            }, 0)
            let linea = document.createElement("li");
            linea.className = "list-group-item cartToCarr "
            linea.innerHTML = `<div class="d-flex justify-content-between align-items-start">
                           <div class="ms-2 me-auto">
                           <div class="fw-bold">${item[0].menu}</div>
                           ${item[0].price}$
                           </div>
                           <span class="badge bg-primary rounded-pill">${quantity}</span>
                           </div>`
            let contbutoonD = document.createElement("div")
            let buttonDelete = document.createElement("button")
            buttonDelete.className = "btn-c"
            buttonDelete.innerText = "Eliminar"
            buttonDelete.dataset.item = itemId
            buttonDelete.addEventListener("click", () => console.log('deleteCart'))
            contbutoonD.append(buttonDelete)
            linea.append(contbutoonD)
            trolleyList.append(linea)
        })
        valueTotalList.innerHTML = calculoTotal() + "$"
    }
    
    fetch('/')
        .then(res => res.json())
        .then(data => {
            productos = data.payload 
            console.log('productos',productos)
            data.payload.forEach(element => {
                let business = document.createElement("div");
                business.className = "card";
                let businessName = document.createElement("h2");
                businessName.innerHTML = `${element.name}`;
                business.innerHTML =  `<img src="${element.image}" class="card-img-top" alt="restaurante">`
                let card = document.createElement("div");
                card.className = "card-body";
                let menu = document.createElement("h3");
                menu.innerHTML = `Menu ${element.menuId}:`;
                let name_product = document.createElement("h4");
                name_product.innerHTML = `${element.menu}`
                let price_product = document.createElement("h4");
                price_product.innerHTML = `Precio: $${element.price}`
                let blockBotton = document.createElement("div")
                blockBotton.className = " d-flex justify-content-between"
                let cardBotton = document.createElement("button");
                let infocardBotton = document.createElement("button");
                infocardBotton.className = "btn btn-outline-info"
                infocardBotton.innerText = "Ver"
                infocardBotton.setAttribute("info", element._id)
                cardBotton.innerText = "Comprar"
                cardBotton.className = "btn btn-outline-primary"
                cardBotton.setAttribute("mark", element._id)
                cardBotton.addEventListener("click", addCartToTrolley)
                blockBotton.append(cardBotton)
                blockBotton.append(infocardBotton)
                card.append(menu);
                card.append(name_product);
                card.append(price_product)
                card.append(blockBotton)
                business.append(businessName)
                business.append(card)
                productsList.append(business)
            });
        })
})();
/*
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
    const usuarios = document.getElementById('main')
  const page = document.getElementById('page')
  let site = '/api'
  fetch(site)
  .then(res => res.json())
  .then(data => {
    data.payload.forEach(element => {
      let business = document.createElement("article");
      business.className = "card";
      let businessName = document.createElement("h2");
      businessName.innerHTML= `${element.name}`;
      let card = document.createElement("div");
      card.className = "card"; 
      for(const product of element.products){
        let menu = document.createElement("h3");
        menu.innerHTML= `Menu ${product.id}:`;
        let name_product = document.createElement("h4");
        name_product.innerHTML=`${product.name}`
        let price_product = document.createElement("h4");
        price_product.innerHTML=`Precio: $${product.price}`

        card.append(menu);
        card.append(name_product);
        card.append(price_product)
      }
      business.append(businessName)
      business.append(card)
      usuarios.append(business)
    });
  })*/