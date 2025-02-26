import { ADD_TO_CART, CLEAN_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return [
            ...state,
            action.data
        ]
        case REMOVE_FROM_CART: 
        let result = state.filter(item => {
            return item.name != action.data
        })
            return [
                ...result,
            ]
            case CLEAN_CART: 
                return [
                    
                ]
        default:
            return state
    }
}