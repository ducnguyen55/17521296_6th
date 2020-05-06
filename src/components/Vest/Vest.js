import React, {Component} from 'react';
import Menu from '../../Menu/Menu';
import VestProduct from './VestProduct';
import Footer from '../../Footer/Footer';

class Vest extends Component {
  render(){
  return (
    <div className="Vest">
      <header className="App-header">
        <Menu className='Menu' />
      </header>
      <div className="Product">
        <div className="NewProduct">
          <VestProduct />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Vest;