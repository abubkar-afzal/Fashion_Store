import { ADD_TO_CART, CLEAN_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";

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
