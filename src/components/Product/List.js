import React from 'react';
import ProductItem from './Item'

const ProductList = (props) => {
  const ProductItems = props.products.map((product, id)=>{
    return <ProductItem key={product._id} id={id} product={product} sum={props.sum} substract={props.substract}/>
  })

  return (
    <div className="col-4">
      <ul className="list-group">
        {ProductItems}
      </ul>
    </div>
    )
}

export default ProductList