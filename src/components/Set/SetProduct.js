import React, {Component} from 'react';
import ListProduct from '../../Product/ListProduct';
import '../../Product/Product.css'

class SetProduct extends Component {
	constructor(){
		super();
		this.state={
			product:[],
			setproduct:[]
		};
	}

	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/get-data`)
		.then(response => response.json())
		.then(data => this.setState({product:data}));
	}

	Convert = () => {
		this.state.setproduct=[];
		this.state.product.map((good,i)=>{
			if(good.type=="set")
				this.state.setproduct.push(good);
	})}
	render(){
		{this.Convert()};
		const {setproduct} = this.state;
		if(!setproduct.length)
			return <h1>Loading</h1>
		else {
			return (
				<div className="container">
					<h2 className="Title">Set bộ</h2>
					<ListProduct product={setproduct}/>
				</div>
			);
		}
	}
}

export default SetProduct;