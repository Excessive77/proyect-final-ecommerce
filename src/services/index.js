import axios from 'axios'


const url = 'https://ecommerce-exercise-backend.herokuapp.com'

const getConfig = () => ({
  headers: {
    Authorization : `Bearer ${localStorage.getItem('token')}`
  }
})

export const loginUser =async (data) => {

    const req = await axios.post(`${url}/login/`, data)
  return req.data

}


export const getProducts = async () => {
  const req = await axios.get(`${url}/products/`, getConfig())
  return req.data
}



export const getProductById = async(id) => {
  const req = await axios.get(`${url}/products/${id}/`, getConfig())  
  return req.data
}

export const getFilterCategories = async () => {
  const req = await axios.get(`${url}/categories/`, getConfig())
  return req.data
}

export const getFilterProducts = async (id) => {
  const req = await axios.get(`${url}/products/?category=${id}`, getConfig())
  return req.data
}

export const addProductToCard = async (data) => {
  const req = await axios.post(`${url}/products/add_to_cart/`, data, getConfig())
  return req.data
}

export const getProductsFromCart = async () => {
  const req = await axios.get(`${url}/cart/`, getConfig())
  return req.data
}

export const deleteProductFromCart = async (id) => {
  const req = await axios.delete(`${url}/cart/${id}/remove_item/`, getConfig())
  return req.data
}

export const postCheckout = async () => {
  const req = await axios.post(`${url}/cart/buy/`, {}, getConfig())
  return req.data
}
