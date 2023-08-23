export default class ProductsDTO {
    constructor(products){
      this.name = products.name
      this.image = products.image
      this.stock = products.stock
      this.products = [
        {
            id : products.id,
            menu: products.menu,
            price: products.price,
        }
      ]
    }
}