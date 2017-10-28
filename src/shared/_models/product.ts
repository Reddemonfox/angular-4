import {Injectable} from '@angular/core';


@Injectable()
export class ProductModel {

  /*constructor() {
   console.log("In Product Model");
   }*/
  constructor(private id: string,
              private name: string,
              private categoryId: string,
              private description: string,
              private status: boolean,
              private images: string,
              private isFeatured: string,
              private price: string,
              private location: string,
              private phone: string,
              private tags: any,
              private isFavourite: boolean,
              private created: any
              ) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.description = description;
    this.status = status;
    this.price = price;
    this.images = images;
    this.isFeatured = isFeatured;
    this.location = location;
    this.phone = phone;
    this.tags = tags;
    this.isFavourite = isFavourite;
    this.created = new Date(created);
  }

  public setIsFavourite(option: boolean) {
    this.isFavourite = option;
  }
}
