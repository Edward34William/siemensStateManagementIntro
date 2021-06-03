import { CartActions, CartActionTypes } from '../actions/cart-actions';
import { Product } from './../../models/product';

export let initalState : Product[] = []

export function cartReducer(state=initalState,action:any){
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            return [...state,action.payload]
        case CartActionTypes.REMOVE_FROM_CART:
            return state.filter(p=>p.id !== action.payload.id)
        default:
           return state;
    }
}