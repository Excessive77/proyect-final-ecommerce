import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import { setInfoProductThunk } from '../redux/actions'
import { addProductToCard } from '../services'

const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productInfo)
    const filterProducts = useSelector(state => state.products)

    const [quantity, setQuantity] = useState(1)
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
      dispatch(setInfoProductThunk(id))
    }, [dispatch, id])

    useEffect(() => {
      if(quantity && confirm) {
        addProductToCard({
          product: id,
          quantity: quantity
        })
        .then(() => {
          setConfirm(false)

        })
      }
    }, [quantity, confirm, id])

    useEffect(() => {
      if(product.category){
        dispatch(setInfoProductThunk(product.category.id))
      }
    }, [dispatch, product])

    const decrement = () => {
      if(quantity > 0){
        setQuantity(quantity - 1)
      }
    }



    
  return (
    <div>
        <h1>{product.name}</h1>
        <div>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <h3 width='50px'>{quantity}</h3>
          <button onClick={decrement}>-</button>
          <br/>
          <button onClick={() => setConfirm(true)}>Add to cart</button>
        </div>
        <p>{product.description}</p>
        {
          product.images?.map((item) => <img src={item.url} key={item.id} width='200px' alt=''/>)
        }
        <h2>Productos relacionados</h2>
          {filterProducts.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
            </div>
          ))}
        
    </div>
  )
}

export default Product