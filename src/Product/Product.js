import React from 'react';
import './Product.css';

const Product = ({id,name,image,discount,price}) => {
	if(discount==="true")
	{
		return (
		<div className='col-sm-3'>
			<a href="#">
				<img alt='imageproduct' src={`${image}`} id="image"/>
			</a>
			<h3 className="productName">
				<a href="#">{name}</a>
			</h3>
			<div className="icon-Discount">
				<span>-50%</span>
			</div>
			<div className="priceDiscount">
				{price}.000
			</div>
			<div className="price">
				{price/2}00
			</div>
		</div>	
		);
	}
	else
	{
		return (
		<div className='col-sm-3'>
			<a href="#">
				<img alt='imageproduct' src={`${image}`} id="image"/>
			</a>
			<h3 className="productName">
				<a href="#">{name}</a>
			</h3>
			<div className="price">
				{price},000
			</div>
		</div>	
		);
	}
}

export default Product;