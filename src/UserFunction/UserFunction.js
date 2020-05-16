import axios from 'axios'

export const register = newUser => {
	return axios
		.post('https://apiserver6th.herokuapp.com/user/register',{
			full_name: newUser.full_name,
			gmail: newUser.gmail,
			password: newUser.password
		})
		.then(res => {
			console.log('Registered!')
		})
}

export const login = user => {
	return axios
		.post('https://apiserver6th.herokuapp.com/user/login',{
			gmail: user.gmail,
			password: user.password
		})
		.then(res => {
			if(res.data.error == "User does not exist")
				{
					var confirm = document.getElementById('confirm');
		            confirm.innerHTML='Tài khoản không tồn tại';
            		confirm.style.color="red";
				}
			else if(res.data.error == "Wrong password")
				{
					var confirm = document.getElementById('confirm');
		            confirm.innerHTML='Sai mật khẩu';
            		confirm.style.color="red";
				}
			else if(res.data.length > 100){
				localStorage.setItem('usertoken',res.data);
				return res.data;
			}
		})
		.catch(err => {
			console.log(err)
		})
}