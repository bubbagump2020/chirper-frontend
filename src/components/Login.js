import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	textField: {
	  marginLeft: theme.spacing(1),
	  marginRight: theme.spacing(1),
	  width: 200,
	},
	button: {
		margin: theme.spacing(1),
	},
	dense: {
	  marginTop: 19,
	},
	menu: {
	  width: 200,
	},
  }));

export function Login(props) {
	const classes = useStyles();
  
	const [user, changeUser] = useState({
		username: '',
		email: '',
		password: ''
	})


	const [newUser, changeNewUser] = useState({
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

	async function createUser (e) {
		e.preventDefault()
		let response = await fetch('http://localhost:3001/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: newUser.username,
				email: newUser.email,
				password: newUser.password
			})
		})
	}

	return(
		<Container>
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
					<input type="submit" value="Sign In" />
				</form>
			</div>
			<div>
				<form onSubmit={createUser}>
					<h1>Signup for Chirper!</h1>
					<div>
						<TextField label="Username" className={classes.textField} value={newUser.username} onChange={e => changeNewUser({ ...newUser, username: e.target.value})} />
					</div>
					<div>
						<TextField label="Email" className={classes.textField} value={newUser.email} onChange={e => changeNewUser({ ...newUser, email: e.target.value })} />
					</div>
					<div>
						<TextField label="Password" className={classes.textField} value={newUser.password} onChange={e => changeNewUser({ ...newUser, password: e.target.value })} />
					</div>
					<div>
						<input type="submit" value="Sign Up" />
					</div>
				</form>
			</div>
		</Container>
	)


}