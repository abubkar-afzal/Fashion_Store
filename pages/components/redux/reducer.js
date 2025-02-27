import { ADD_TO_CART, CLEAN_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemExists = state.some(item => item._id === action.data._id);
            if (itemExists) {
                return state;
            }
            return [...state, action.data];

        case REMOVE_FROM_CART:

            return state.filter(item => item._id !== action.data);
        case CLEAN_CART:
            return [

            ]
        default:
            return state
    }
}