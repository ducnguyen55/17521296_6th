import React, {Component} from 'react';
import Menu from '../../Menu/Menu';
import TShirtProduct from './TShirtProduct';
import Footer from '../../Footer/Footer';

class TShirt extends Component {
  render(){
  return (
    <div className="TShirt">
      <header className="App-header">
        <Menu className='Menu' />
      </header>
      <div className="Product">
        <div className="NewProduct">
          <TShirtProduct />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default TShirt;