import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import './NewProduct.css';

class NewProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			newproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/product/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.newproduct=[];
		this.state.product.map((good,i)=>{
			if(good.discount=="false")
				this.state.newproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {newproduct} = this.state;
		if(!newproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">Sản phẩm mới</h2>
					<ListProduct product={newproduct}/>
				</div>
			);
		}
	}
}

export default NewProduct;