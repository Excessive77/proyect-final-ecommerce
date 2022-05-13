import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { setCategoriesThunk, setProductThunk } from "../redux/actions"
import '../styles/stylesShop.css'

const Shop = () => {

  const dispatch = useDispatch()
  const productArr = useSelector(state => state.products)
  const categoriesArr = useSelector(state => state.categories)
  const [currentCategory, setCurrentCategory] = useState('')


    useEffect(() => {
      dispatch(setProductThunk(currentCategory))
      dispatch(setCategoriesThunk())
    }, [dispatch, currentCategory])


    const list = productArr.map((item) => <ProductItem key={item.id} prodObj={item}/>)
    const categoriesList = categoriesArr.map(item => <button key={item.id} className='btn-categories' onClick={() => setCurrentCategory(item.id)}>{item.name}</button>) 

  return (
    
      <div className="main-shop">
          <h1>This is my Shop</h1>
          <button onClick={() => setCurrentCategory('')} className='btn-categories'>All products</button>
            {categoriesList}
              <div className="container-product">
                {list}
          </div>
      </div>
    
  )
}

export default Shop