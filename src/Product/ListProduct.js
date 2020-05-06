import React from 'react';
import Product from './Product';

const ListProduct = ({product}) => {
	return (
		  <div className="row">
		  {
		  	product.map((good,i)=> {
			  		return(
			  		 	<Product
			  		 		key={i} 
			  		 		id={product[i].id}
			  		 		name={product[i].name} 
			  		 		image={product[i].image}
			  		 		price={product[i].price}
			  		 		discount={product[i].discount}
			  		 		/>	
			  		);
		  		})
		  }
		  </div>
	);
}


export default ListProduct;