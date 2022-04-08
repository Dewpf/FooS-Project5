const initialState = {
    products: [],
    cart: [],
    checkoutCart: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getProduct':
            const newState = {
             ...state,
             products: action.payload
            }
            return newState 
        default: 
        return state
    }
}


export default reducer