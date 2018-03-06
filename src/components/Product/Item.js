import React from 'react';
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
        <CounterProduct product={product} sum={props.sum} substract={props.substract}/>
      </div>
    </li>
    )
}

export default ProductItem