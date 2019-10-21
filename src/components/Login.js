import React, { useState } from 'react'

export function Login(props) {

	const [user, changeUser] = useState({
		username: '',
		email: '',
		password: ''
	})

	async function loginUser(e) {
		e.preventDefault()
		let response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user.username,
				email: user.email,
				password: user.password
			})
		})
		let {success, id, token} = await response.json()
		if(success){
            localStorage.setItem('token', token)
            props.history.push(`/users/${id}`)
        }

	}

	return(
		<div>
			<form onSubmit={loginUser}>
				<h1>Login to Chirper!</h1>
				<div>
					<label>Username: </label>
					<input type="text" value={user.username} onChange={e => changeUser({ ...user, username: e.target.value})} />
				</div>
				<div>
					<label>Email: </label>
					<input type="text" value={user.name} onChange={e => changeUser({ ...user, email: e.target.value})} />
				</div>
				<div>
					<label>Password: </label>
					<input type="password" value={user.password} onChange={e => changeUser({ ...user, password: e.target.value})} />
				</div>
				<input type="submit" />
			</form>
			{/* <form onSubmit={createUser}>
				<h1>Signup for Chirper!</h1>
				<div>
					<label>Username: </label>
					<input type="text" value={user.username} onChange={e => console.log(e.target.value)} />
				</div>
				<div>
					<label>Email: </label>
					<input type="text" value={user.email} onChange={e => console.log(e.target.value)} />
				</div>
				<div>
					<label>Password: </label>
					<input type="password" value={user.password} onChange={e => console.log(e.target.value)} />
				</div>
				<button>Sign Up</button>
			</form> */}
		</div>
	)


}