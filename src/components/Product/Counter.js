import React from 'react';

const CounterProduct = (props) => {
  const product = props.product

  return (
    <div className="btn-group btn-group-md" role="group" aria-label="Large button group">
      <button type="button" className="btn btn-secondary" onClick={() => props.substract(product._id, props.id)}>-</button>
      <button type="button" disabled className="btn btn-default disabled">{product.quantity}</button>
      <button type="button" className="btn btn-secondary" onClick={() => props.sum(product._id, props.id)}>+</button>
    </div>
    )

}

export default CounterProduct