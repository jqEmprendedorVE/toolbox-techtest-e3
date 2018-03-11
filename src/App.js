import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import ProductList from './components/Product/List'


const urlapi = 'https://toolbox-techtest-e2.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      products: [],
      loadMessage: 'Espere mientras se active el servidor demo de Mongodb'
    }

    this.getAllProducts()

    this.sumOneQtytoProduct = this.sumOneQtytoProduct.bind(this)
    this.substractOneQtytoProduct = this.substractOneQtytoProduct.bind(this)

  }

  getAllProducts() {
    axios.get(urlapi + '/products').then(res => {
      this.setState({ products: res.data})
      this.setState({ loadMessage: 'Sin data para mostrar'})
    })
  }

  sumOneQtytoProduct(_id, id) {
    axios.post(`${urlapi}/products/sum/${_id}`).then(res=>{
      let products = this.state.products
      products[id].quantity = res.data.product.quantity
      this.setState({products})
    })
  }

  substractOneQtytoProduct(_id, id) {
    axios.post(`${urlapi}/products/substract/${_id}`).then(res=>{
      let products = this.state.products
      if(products[id].quantity===0) return 
      products[id].quantity = res.data.product.quantity
      this.setState({products})
    }) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minisite que consume una Api Restful</h1>
        </header>
        <br/>
        <h4>Lista de productos</h4>
        <div className="row justify-content-center">
          <ProductList 
            products={this.state.products}
            sum={this.sumOneQtytoProduct}
            substract={this.substractOneQtytoProduct}
            loadMessage={this.state.loadMessage}
          />
        </div>
        <div className="App-intro">
        </div>
      </div>
    );
  }
}

export default App;
