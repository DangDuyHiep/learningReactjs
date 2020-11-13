import React , {Component} from 'react';
import './App.css';
//import Product from './components/Header';
import {Product} from './components/Product';


class App extends Component {
  onClick(){
    console.log("cc");
  }
  render(){
    var products=[
      {
          id: 1,
          name : "Iphone 6 plus",
          price : 60000,
          status : true
      },

      {
        id: 2,
        name : "Samsung",
        price : 60000,
        status : true
      },

      {
        id: 3,
        name : "Sony",
        price : 60000,
        status : true
      },
      {
        id: 4,
        name : "Xiaomi",
        price : 60000,
        status : false
      },
    ];

    let elements = products.map((product, index) => {
      if(product.status == true){
        return(
            <Product
              key =  {product.id}
              name = {product.name}
              price= {product.price}
            />
        );
      }
    });
    return (
      <div>
          <nav className="navbar navbar-inverse">
            <a className="navbar-brand">Props</a>
          </nav>
          <div className="container">
            <div className="row">
                <div className="col-12">
                  {elements}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <button type="button" className="btn btn-default" onClick={ this.onClick }>
                    Click me!
                  </button>
                </div>
            </div>
          </div>
      </div>
    );
  };
}

export default App;
