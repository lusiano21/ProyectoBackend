export default class ProductsDTO {
    constructor(products){
      this.name = products.name
      this.image = products.image
      this.stock = products.stock
      this.menuId = products.id
      this.menu = products.menu
      this.price = products.price
    }
}