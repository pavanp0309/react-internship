import axios from 'axios';



// action creators

export let Fetch_Product_Req = "fetch_product_req"
export let Fetch_Product_Success = "fetch_product_success "
export let Fetch_Product_Fail = "fetch_product_fail "


// creating the actions :
export function fetchProductReq() {
    return {
        type: Fetch_Product_Req
    }
}


export function fetchProductSuccess(products) {
    console.log("p:",products)
    return {
        type: Fetch_Product_Success,
        payload: products
    }
}


export function fetchProductFail(error) {
    return {
        type: Fetch_Product_Fail,
        payload: error
    }
}


export function fetchProducts() {
    return function (dispatch) {
        //  fetching the data
        dispatch(fetchProductReq())

        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                // after fetching the data-success
                console.log(response.data)
                let products = response.data
                
                dispatch(fetchProductSuccess(products))
            })
            .catch(function (error) {
                //  // after fetching the data failure
                let errmsg = error.message
                dispatch(fetchProductFail(errmsg))
            })
    }
}