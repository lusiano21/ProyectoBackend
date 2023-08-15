export default class BusinesDTO {
    constructor(business){
      this.name = business.name
      this.image = business.image
      this.products = [
        {
            id : business.id,
            name: business.name,
            price: business.price
        }
      ]
    }
}