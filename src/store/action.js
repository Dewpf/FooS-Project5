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