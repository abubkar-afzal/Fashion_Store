import { ADD_TO_CART, CLEAN_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";


// actions.js (or a similar file where you define your Redux actions)
export const updateCartQuantity = (itemId, newQuantity) => {
    return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
        itemId,
        newQuantity
      }
    };
  };
  

export function removeFromCart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}

export function addToCart(item){
    return(
        {type:ADD_TO_CART,
        data : item
        }
    )
}
export function cleanCart(item){
    return{
        type:CLEAN_CART,
        data:item
    }
}
