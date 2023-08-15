(function() {
  const usuarios = document.getElementById('main')
  let site = '/api'
  fetch(site)
  .then(res => res.json())
  .then(data => {
    data.payload.forEach(element => {
      let business = document.createElement("article");
      business.className = "card";
      let businessName = document.createElement("h2");
      businessName.className = "card-title"
      businessName.innerHTML= `${element.name}`;
      let card = document.createElement("div");
      card.className = "card"; 
      card.innerHTML = `
      <img src="${element.image}" class="card-img-top" alt="imgManu">`
      for(const product of element.products){
        let cardBody = document.createElement("div")
        cardBody.className("card-body")
        let menuId = document.createElement("h5");
        menuId.className = "card-title" 
        menu.innerHTML= `Menu: ${product.id}`;
        let name_product = document.createElement("h4");
        name_product.className = "card-title" 
        name_product.innerHTML=`${product.menu}`;
        let price_product = document.createElement("p");
        price_product.className = "card-text"
        price_product.innerHTML=`Precio: $${product.price}`;
        cardBody.append(menu);
        cardBody.append(name_product);
        cardBody.append(price_product);
        card.append(cardBody);
      }
      business.append(businessName)
      business.append(card)
      usuarios.append(business)
    });
  })

})();