import React, {Component} from 'react';
import Menu from '../../Menu/Menu';
import SetProduct from './SetProduct';
import Footer from '../../Footer/Footer';
class Set extends Component {
  render(){
  return (
    <div className="Set">
      <header className="App-header">
        <Menu className='Menu' />
      </header>
      <div className="Product">
        <div className="NewProduct">
          <SetProduct />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Set;