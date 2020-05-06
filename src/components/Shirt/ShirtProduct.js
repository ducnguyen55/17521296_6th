import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class ShirtProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			shirtproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.shirtproduct=[];
		this.state.product.map((good,i)=>{
			if(good.type=="shirt")
				this.state.shirtproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {shirtproduct} = this.state;
		if(!shirtproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">Áo sơ mi</h2>
					<ListProduct product={shirtproduct}/>
				</div>
			);
		}
	}
}

export default ShirtProduct;