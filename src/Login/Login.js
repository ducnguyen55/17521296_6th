import React, {Component} from 'react';
import './Login.css';
import {Link,Redirect} from 'react-router-dom';

class Login extends Component {
	constructor(){
		super();
		this.state={
			isRedirect: false,
			users:[]
		};
	}
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };
	async componentDidMount() {
		await fetch(`https://apiserver6th.herokuapp.com/user/get-data`)
		.then(response => response.json())
		.then(data => this.setState({users:data}));
	}
	login = () => {
		const {users} = this.state;
		var login = false;
		var gmail = document.getElementById("gmail").value;
		var password = document.getElementById("password").value;
		for(var user of users){
			if(user.gmail==gmail&&user.password==password)
					login=true;
			}
		if(login){
			alert('Đăng nhập thành công');
			alert('Xin lỗi trang web hiện chưa có chức năng session login nên sẽ quay về trang chủ');
			this.setState({
				isRedirect: true
			});
		}
		else
			alert('Đăng nhập thất bại');
	}

	render(){
		if(this.state.isRedirect){
			return (
				<Redirect to="/" />
			)
		}
		return (
			<div className="Login-Form">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-6 m-auto">
							<div className="login">
								<div className="Title-login">
									<i class="fa fa-sign-in" aria-hidden="true"></i>
								</div>
								<form onClick={this.handleSubmit}>
									<div>
										<label for="email">Email :</label>
										<input type="gmail" id="gmail" name="gmail" onChange={this.changeHandler} placeholder="Nhập Email" />
									</div>
									<div>
										<label for="password">Password :</label>
										<input type="password" id="password" name="password" onChange={this.changeHandler} placeholder="Nhập Password" />
									</div>
									<button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
								</form>
								<p className="Info">
									No Account?
									<Link to="/dangky">Register</Link>
									<Link to="/">Trang chủ</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;