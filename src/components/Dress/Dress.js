import React, {Component} from 'react';
import Menu from '../../Menu/Menu';
import DressProduct from './DressProduct';
import Footer from '../../Footer/Footer';
class Dress extends Component {
  render(){
  return (
    <div className="Dress">
      <header className="App-header">
        <Menu className='Menu' />
      </header>
      <div className="Product">
        <div className="NewProduct">
          <DressProduct />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Dress;