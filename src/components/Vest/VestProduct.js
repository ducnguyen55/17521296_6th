import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class VestProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	render(){
		const {product} = this.state;
		if(!product.length){
			return <h2 className="Title">HIỆN CHƯA CÓ SẢN PHẨM NÀY</h2>
		}
		else{
		return (
			<div className="container">
				<h2 className="Title">Áo vest</h2>
				<ListProduct product={product}/>
			</div>
			);
		}
	}
}

export default VestProduct;