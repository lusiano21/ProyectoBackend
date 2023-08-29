(function () {
    let trolley = [];
    const trolleyList = document.getElementById("trolley-list")
    const productsList = document.getElementById("products-list")
    const btnbuy = document.getElementById("buy")
    function addCartToTrolley(event) {
        trolley.push(event.target.getAttribute("mark"))
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
            let item = productos.filter((el) => {
                return el.id === parseInt(ItemId)
            })
            return total + item[0].precio
        }, 0)

    }
    function renderTrolley() {
        //saveCartToStorage()
        //saveTrolley()
        trolleyList.innerHTML = ""
        let cartWhithoudRepeatedElements = [...new Set(trolley)]
        cartWhithoudRepeatedElements.forEach((itemId) => {
            let item = productos.filter((producto) => {
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
        valueTotalList.innerHTML = calculoTotal() + "$"
    }
    fetch('/')
        .then(res => res.json())
        .then(data => {
            data.payload.forEach(element => {
                let business = document.createElement("div");
                business.className = "card";
                let businessName = document.createElement("h2");
                businessName.innerHTML = `${element.name}`;
                let card = document.createElement("div");
                card.className = "card";
                for (const product of element.products) {
                    let menu = document.createElement("h3");
                    menu.innerHTML = `Menu ${product.id}:`;
                    let name_product = document.createElement("h4");
                    name_product.innerHTML = `${product.name}`
                    let price_product = document.createElement("h4");
                    price_product.innerHTML = `Precio: $${product.price}`

                    card.append(menu);
                    card.append(name_product);
                    card.append(price_product)
                }
                business.append(businessName)
                business.append(card)
                productsList.append(business)
            });
        })
    btnbuy.addEventListener("click", addCartToTrolley)
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