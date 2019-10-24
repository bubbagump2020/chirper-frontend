import React, { useState } from 'react'

  import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
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
            props.history.push(`/users/`)
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
				<Form onSubmit={loginUser} className="form1">
					<h1 style={{color: "#1DB954"}}>Login to Chirper!</h1>
					<FormGroup>
						<Label style={{color: "#1DB954", display: "inline-block", width: "140px", textAlign: "center" }}>Username: </Label>
						<Input type="text" value={user.username} onChange={e => changeUser({ ...user, username: e.target.value})} />
					</FormGroup>
					<FormGroup>
						<Label style={{color: "#1DB954"}}>Email: </Label>
						<Input type="text" value={user.name} onChange={e => changeUser({ ...user, email: e.target.value})} />
					</FormGroup>
					<FormGroup>
						<Label style={{color: "#1DB954"}}>Password: </Label>
						<Input type="password" value={user.password} onChange={e => changeUser({ ...user, password: e.target.value})} />
					</FormGroup>
					<Button><Input style={{color: "#1DB954"}} type="submit" value="Sign In"/></Button>
				</Form>
			</div>
			<div>

				<Form onSubmit={createUser} className="form2">
					<h1 style={{color: "#1DB954"}}>Signup for Chirper!</h1>
					<FormGroup>
						<Label style={{color: "#1DB954"}} >Username: </Label>
						<Input type="text" value={newUser.username} onChange={e => changeNewUser({ ...newUser, username: e.target.value })} />
					</FormGroup>
					<FormGroup>
						<Label style={{color: "#1DB954"}}>Email: </Label>
						<Input style={{color: "#1DB954"}} type="text" value={newUser.email} onChange={e => changeNewUser({ ...newUser, email: e.target.value})} />
					</FormGroup>
					<FormGroup>
						<Label style={{color: "#1DB954"}}>Password: </Label>
						<Input type="password" value={newUser.password} onChange={e => changeNewUser({ ...newUser, password: e.target.value})} />
					</FormGroup>
					<Button><input style={{color: "#1DB954"}} type="submit" value="Sign Up" /></Button>
				</Form>

			</div>
		</Container>
	)


}