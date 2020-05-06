import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class JuypProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			juypproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/product/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.juypproduct=[];
		this.state.product.map((good,i)=>{
			if(good.type=="juyp")
				this.state.juypproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {juypproduct} = this.state;
		if(!juypproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">JUYP</h2>
					<ListProduct product={juypproduct}/>
				</div>
			);
		}
	}
}

export default JuypProduct;