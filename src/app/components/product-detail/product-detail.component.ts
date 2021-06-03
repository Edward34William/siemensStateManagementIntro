import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/data/products';
import { Store } from '@ngrx/store';
import { AddToCart } from 'src/app/store/actions/cart-actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  constructor(private activatedRoute:ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params)
      console.log("Detay getiriliyor")
      let id = params["id"];
      let result = Products.find(p=>p.id==id)
      this.product = result;
    })

    console.log("Detay geldi")
  }

  addToCart(product:Product){
    this.store.dispatch(new AddToCart(product))
  }

}
