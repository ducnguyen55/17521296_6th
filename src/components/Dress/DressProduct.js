import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class DressProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			dressproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/product/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.dressproduct=[];
		this.state.product.map((good,i)=>{
			if(good.type=="dress")
				this.state.dressproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {dressproduct} = this.state;
		if(!dressproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">Đầm</h2>
					<ListProduct product={dressproduct}/>
				</div>
			);
		}
	}
}

export default DressProduct;