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
        case 'getCart':
            const newStateCart = {
            ...state,
            cart: action.payload
            } 
            return newStateCart
        default: 
            return state
    }
}


export default reducer