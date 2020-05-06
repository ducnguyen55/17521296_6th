import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class TShirtProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			tshirtproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/product/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.tshirtproduct=[];
		this.state.product.map((good,i)=>{
			if(good.type=="aophong")
				this.state.tshirtproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {tshirtproduct} = this.state;
		if(!tshirtproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">Áo phông</h2>
					<ListProduct product={tshirtproduct}/>
				</div>
			);
		}
	}
}

export default TShirtProduct;