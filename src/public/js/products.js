(function () {
    let trolley = [];
    let productos = [];
    let authorizeBuy;
    const trolleyList = document.getElementById("trolley-list");
    const trolleyEvent = document.getElementById("trolley-event");
    const productsList = document.getElementById("products-list");
    const valueTotalList = document.getElementById("totalvalue");
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
                return el._id === ItemId
            })
            return total + item[0].price
        }, 0)

    }
    function buyCart(order) {
        fetch('/api/sessions/order',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        .then((res) => res.json())
        .then((data) => console.log('data',data))
    }
    function buyNoCart() {
        console.log('No puedes Comprar')
    }
    function deleteCart(event) {
        let id = event.target.dataset.item
        trolley = trolley.filter((el) => {
            return el != id
        })
        renderTrolley()
    }
    function renderTrolley() {
        //saveCartToStorage()
        //saveTrolley()
        trolleyList.innerHTML = "";
        trolleyEvent.innerHTML = ""
        let cartWhithoudRepeatedElements = [...new Set(trolley)];
        cartWhithoudRepeatedElements.forEach((itemId) => {
            let item = productos.filter((producto) => {
                return producto._id === itemId
            })
            console.log('Item', item)
            let quantity = trolley.reduce((total, id) => {
                return id === itemId ? total += 1 : total
            }, 0)
            const order = {
                user:`${authorizeBuy._id}`,
                product:`${item[0]._id}`,
                products: [
                    {
                        id: item[0].menuId,
                        price: item[0].price,
                        quantity: quantity
                    }
                ]
            }
            console.log('Order',order)
            let linea = document.createElement("li");
            linea.className = "list-group-item"
            linea.innerHTML = `<div class="d-flex justify-content-between align-items-start">
                           <div class="ms-2 me-auto">
                           <div class="fw-bold">${item[0].menu}</div>
                           ${item[0].price}$
                           </div>
                           <span class="badge bg-primary rounded-pill">${quantity}</span>
                           </div>`
            let contbutoonD = document.createElement("div");
            let buttonDelete = document.createElement("button");
            let buttonBuy = document.createElement("button");
            buttonBuy.className = "btn btn-outline-info";
            buttonBuy.innerText = "Comprar"
            if (authorizeBuy) {
                buttonBuy.addEventListener("click", () => buyCart(order));
            } else {
                buttonBuy.addEventListener("click", buyNoCart);
            }
            buttonDelete.className = "btn btn-outline-info";
            buttonDelete.innerText = "Eliminar";
            buttonDelete.dataset.item = itemId;
            buttonDelete.addEventListener("click", deleteCart);
            contbutoonD.append(buttonDelete);
            contbutoonD.append(buttonBuy)
            linea.append(contbutoonD);
            trolleyEvent.append(buttonBuy)
            trolleyList.append(linea);
        })
        valueTotalList.innerHTML = calculoTotal() + "$"
    }
    fetch('/api/sessions/me')
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                if (data.payload) {
                    authorizeBuy = data.payload
                }
            }
        })
        .catch(authorizeBuy = false)
    fetch('/')
        .then(res => res.json())
        .then(data => {
            productos = data.payload
            data.payload.forEach(element => {
                let business = document.createElement("div");
                business.className = "card card-bussiness";
                let businessName = document.createElement("h2");
                businessName.innerHTML = `${element.name}`;
                business.innerHTML = `<img src="${element.image}" class="card-img-top" alt="restaurante">`
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
    });
  })*/