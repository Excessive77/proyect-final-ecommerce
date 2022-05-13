import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({prodObj}) => {

  console.log(prodObj)
  return (
    <Link to={`/shop/${prodObj.id}`}>
        <div className='card'>
          <div className="content">
            <div className="imgBox"><img src={prodObj.images[0].url} alt="Imagen" width={'200px'}/></div>
            <div className="contentBox">
              <p>Product: </p>
              <h3>{prodObj.name}</h3>
              <p>Category: </p>
              <h3>{prodObj.category.name}</h3>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default ProductItem