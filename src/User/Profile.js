import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {Link,Redirect} from 'react-router-dom';
class Profile extends Component {
		constructor(){
		super();
		this.state ={
			full_name: '',
			gmail: ''
		};
		this.logOut = this.logOut.bind(this)
	}
	logOut(e){
			e.preventDefault();
			localStorage.removeItem('usertoken');
			this.props.history.push('/dress');
	}
	componentDidMount(){
		const token = localStorage.usertoken;
		const decoded =jwt_decode(token);
		this.setState({
			full_name: decoded.full_name,
			gmail: decoded.gmail
		})
	};
	CheckLogin(){
		var token = localStorage.usertoken;
		if(!token)
			this.props.history.push('/');
	}
	render() {
		{this.CheckLogin()};
		return (
			<div>
				<ul>
					<li className="nav-item">
						<a href="" onClick={this.logOut} className="nav-link">
							Logout
						</a>
					</li>
					<li className="nav_item">
						<Link to="/">Trang chủ</Link>
					</li>
				</ul>
				<div className ="container">
					<div className ="jumbotron mt-5">
						<div className="col-sm-8 mx-auto">
							<h1 className="text-center">PROFILE</h1>
						</div>
						<table className="table col-md-6 mx-auto">
							<tbody>
								<tr>
									<td>Full Name</td>
									<td>{this.state.full_name}</td>
								</tr>
								<tr>
									<td>Gmail</td>
									<td>{this.state.gmail}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Profile;