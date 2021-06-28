/* eslint-disable no-unused-vars */
class Product {
    id: number;
    ownerId: number;
    title: string;
    imageUrl: any;
    description: string;
    price: string;
    constructor (id: number, ownerId: number, title: string, imageUrl: any, description: string, price: string) {
      this.id = id
      this.ownerId = ownerId
      this.imageUrl = imageUrl
      this.title = title
      this.description = description
      this.price = price
    }
}
