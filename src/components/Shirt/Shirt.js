import React, {Component} from 'react';
import Menu from '../../Menu/Menu';
import ShirtProduct from './ShirtProduct';
import Footer from '../../Footer/Footer';
class Shirt extends Component {
  render(){
  return (
    <div className="Shirt">
      <header className="App-header">
        <Menu className='Menu' />
      </header>
      <div className="Product">
        <div className="NewProduct">
          <ShirtProduct />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Shirt;