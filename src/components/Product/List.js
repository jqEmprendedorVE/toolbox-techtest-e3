import React, { Component } from 'react';
import ProductItem from './Item'

const ProductList = (props) => {
  const ProductItems = props.products.map((product)=>{
    return <ProductItem key={product._id} product={product} />
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