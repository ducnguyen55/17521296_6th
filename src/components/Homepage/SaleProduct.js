import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import './NewProduct.css';

class SaleProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			saleproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/product/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.saleproduct=[];
		this.state.product.map((good,i)=>{
			if(good.discount=="true")
				this.state.saleproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {saleproduct} = this.state;
		if(!saleproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">Sản phẩm khuyến mãi</h2>
					<ListProduct product={saleproduct}/>
				</div>
			);
		}
	}
}

export default SaleProduct;