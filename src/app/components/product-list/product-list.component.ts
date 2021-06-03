import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.products = Products;
  }

}
