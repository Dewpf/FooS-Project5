export const fetchProduct = () => {
    return (dispatch, getState) => {
        fetch("https://6247d3b64bd12c92f4041c17.mockapi.io/products")
        .then(response => response.json())
        .then(data => {
            const action = {
              type: 'getProduct',
              payload: data
            }
            dispatch(action)
        })
        .catch(err => console.log(err))
    }
}

export const addToCart = (product) => {
    return (dispatch, getState) => {
        const cart = getState().cart

        const newCart = []

        for (let i = 0; i < cart?.length; i++) {
            const cp = cart[i]
            if (cp?.id === product?.id) {
                cp.quantityOrder--
        }
        if (cp.quantityOrder > 0) {
            newCart.push(cp)
        } 
    }

        const action = {
            type: 'getCart',
            payload: newCart
        }
        dispatch(action)
    }
}

export const removeCart = (product) => {
    return (dispatch, getState) => {
        const cart = getState().cart

        const newCart = []

        for (let i = 0; i < cart?.length; i++) {
            const cp = cart[i]
            if (cp?.id !== product?.id) {
                newCart.push(cp)
            }
        }

        const action = {
            type: 'getCart',
            payload: newCart
        }
        dispatch(action)
    }
}
export const subCart = (product) => {}