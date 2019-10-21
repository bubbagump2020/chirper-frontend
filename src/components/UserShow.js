import React from 'react'

export class UserShow extends React.Component {

    state = {
        user: null,
        reviews: []
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3001/users/${this.props.match.params.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {response.json()})
            .then(user => this.setState({ user: user }))
    }

    render(){
        if(this.state.user === null) {
            return <h1>Loading...</h1>
        }
        return(
            <div>
                <h1>{this.state.user.username}</h1>
            </div>
        )
    }


}

