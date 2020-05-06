import React, {Component} from 'react';
import Menu from '../../Menu/Menu';
import JuypProduct from './JuypProduct';
import Footer from '../../Footer/Footer';
class Juyp extends Component {
  render(){
  return (
    <div className="Juyp">
      <header className="App-header">
        <Menu className='Menu' />
      </header>
      <div className="Product">
        <div className="NewProduct">
          <JuypProduct />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Juyp;