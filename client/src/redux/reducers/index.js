import { GET_CATEGORIES, GET_PRODUCT_DETAIL } from "../actions";


const initialState = {
    products: [],
    filtered: [],
    categories: [],
    details: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                details: action.payload
            };
    
        default:
            return state;
        
    }
}

export default rootReducer;