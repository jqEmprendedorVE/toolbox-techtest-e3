import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import ProductList from './components/Product/List'


const urlapi = 'https://toolbox-techtest-e2.herokuapp.com/'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { products: [] }

    axios.get(urlapi + 'products').then(res => {
      this.setState({ products: res.data})
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
        <div className="row justify-content-center">
          <ProductList products={this.state.products}/>
        </div>
        <div className="App-intro">
        </div>
      </div>
    );
  }
}

export default App;
