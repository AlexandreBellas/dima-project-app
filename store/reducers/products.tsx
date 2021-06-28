// how a product related state slice will look like
const initialState = {
  availableProducts: [], // all products, also the products which we didnt create so that we cant buy our own product
  sellerProducts: [] // the products which we created so where the owner id is the id of the currently logged in seller

}

export default (state = initialState, action) => {
  return state // for the moment we just return the initial state, later we will add other fucntions like add the product etc.
}
