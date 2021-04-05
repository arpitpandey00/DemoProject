import { Component, OnInit } from '@angular/core';
import { IProducts } from './IProducts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  products: IProducts[] = [];

  ngOnInit(): void {
    this.products = this.getDataFromDB();
    console.log(this.products);
  }

  getDataFromDB(): IProducts[] {
    return [
      {
        Id: 1,
        Title: "Pen",
        ExpiryDate: "11-10-2021",
        Price: 90,
        Quantity: 100,
        IsAvaliable: true
      },
      {
        Id: 2,
        Title: "Pencil",
        ExpiryDate: "3-12-2021",
        Price: 10,
        Quantity: 1000,
        IsAvaliable: true
      },
      {
        Id: 3,
        Title: "Screw Driver",
        ExpiryDate: "1-7-2025",
        Price: 900,
        Quantity: 10,
        IsAvaliable: false
      },
      {
        Id: 4,
        Title: "Nails",
        ExpiryDate: "11-10-2030",
        Price: 5,
        Quantity: 500,
        IsAvaliable: false
      },
      {
        Id: 5,
        Title: "Builders Helmet",
        ExpiryDate: "1-10-2030",
        Price: 3000,
        Quantity: 50,
        IsAvaliable: true
      }
    ]

  }
}
