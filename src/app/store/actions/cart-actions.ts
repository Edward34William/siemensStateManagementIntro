import { Product } from './../../models/product';
import { Action } from "@ngrx/store";

export enum CartActionTypes{
    ADD_TO_CART ="ADD_TO_CART",
    REMOVE_FROM_CART="REMOVE_FROM_CART"
}

export class AddToCart implements Action{
    type: string = CartActionTypes.ADD_TO_CART;
    constructor(public payload:Product){

    }

}

export class RemoveFromCart implements Action{
    type: string = CartActionTypes.REMOVE_FROM_CART;
    constructor(public payload:Product){
       
    }

}

export type CartActions = AddToCart | RemoveFromCart