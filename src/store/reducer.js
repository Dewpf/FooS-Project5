// NB
// semua produk yang dimasukkin ke keranjang (:7)
// produk2 yang dari cart tapi kita mau checkout / bayar(:8)

const initialState = {
    products: [],
    cart: [], 
    checkoutCart: [],  
    total: 0
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'getProduct':
        const newState = {
          ...state, // duplicate
          products: action.payload
        }
        return newState
      case 'getCart':
        const newStateCart = {
          ...state, // duplicate
          cart: action.payload
        }
        return newStateCart
      case 'getTotal':
        const newStateTotal = {
          ...state, // duplicate
          total: action.payload
        }
        return newStateTotal
      default: 
        return state
    }
  }
  
  
  export default reducer