import React, {Component} from 'react';
import './Register.css';
import {Link} from 'react-router-dom';

class Register extends Component {
	constructor(props){
        super(props);
        this.state = {name:"", gmail: "", password:"", confirm: ""};
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
    Submit = () => {
        let submit=false;
        var name = document.getElementById('name').value;
        var gmail = document.getElementById('gmail').value;
        var password = document.getElementById('password').value;
        var confirm = document.getElementById('confirmpw').value;
        let format = /^[a-zA-Z0-9]*\@[a-zA-Z0-9]*\.[a-zA-Z0-9]*$/;

        if(name!=''&&format.test(gmail)&&password!=''&&confirm!=''&&password==confirm){
            fetch('http://localhost:5000/user/insert',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                name:this.state.name,
                gmail:this.state.gmail,
                password:this.state.password
            })
        }).then((res) => res.json())
            .then((json)=> {
                this.setState({submitResult:true});
                submit=true;
            })
            .catch((error) => {
                this.setState({submitResult:false});
            });
            
           	alert('Đăng ký thành công');
        }
        else if(name!=''&&!format.test(gmail)){
            alert('Email bị lỗi');
        }
        else if(name!=''&&format.test(gmail)&&password!=''&&confirm!=''&&password!=confirm){
        	alert('Password và Password không trùng nhau');
        }
        else{
            alert('Vui lòng điền đầy đủ thông tin');
        }
        document.getElementById('name').value='';
        document.getElementById('gmail').value='';
        document.getElementById('password').value='';
        document.getElementById('confirmpw').value='';
    };
	render(){
		return (
			<div className="Register-Form">
				<div className="container">
					<div className="row mt-5">
						<div className="col-md-6 m-auto">
							<div className="register">
								<div className="Title-register">
									<i class="fa fa-user" aria-hidden="true"></i>
								</div>
								<form onClick={this.handleSubmit}>
									<div>
										<label for="name">Full name :</label>
										<input type="name" id="name" name="name" onChange={this.changeHandler} placeholder="Name" />
									</div>
									<div>
										<label for="gmail">Gmail :</label>
										<input type="gmail" id="gmail" name="gmail" onChange={this.changeHandler} placeholder="Email" />
									</div>
									<div>
										<label for="password">Password :</label>
										<input type="password" id="password" name="password" onChange={this.changeHandler} placeholder="Password" />
										<label for="password">Confirm Password :</label>
										<input type="password" id="confirmpw" name="password" onChange={this.changeHandler} placeholder="Confirm Password" />
									</div>
									<button type="submit" className="btn btn-primary btn-block" onClick={this.Submit}>Register</button>
								</form>
								<p className="Info">
									Haven an Account?
									<Link to="/dangnhap">Đăng nhập</Link>
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

export default Register;