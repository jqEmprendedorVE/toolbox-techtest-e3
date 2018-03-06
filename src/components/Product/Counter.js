import React, { Component } from 'react';


const CounterProduct = (props) => {
  const product = props.product
  return (
    <div className="btn-group btn-group-md" role="group" aria-label="Large button group">
      <button type="button" className="btn btn-secondary">-</button>
      <button type="button" disabled className="btn btn-default disabled">{product.quantity}</button>
      <button type="button" className="btn btn-secondary">+</button>
    </div>
    )

}

export default CounterProduct