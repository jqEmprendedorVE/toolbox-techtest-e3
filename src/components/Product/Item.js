import React, { Component } from 'react';
import CounterProduct from './Counter'

const ProductItem = (props) => {
  let product = props.product
  return (
    <li className="list-group-item">
      <div className="d-inline">
        <p className="text-left">{product.name} <br/>
          <span><small>{product.description}</small></span>
        </p>
      </div>
      <div className="d-inline">
        <p className="">
          <CounterProduct product={product}/>
        </p>
      </div>
    </li>
    )
}

export default ProductItem