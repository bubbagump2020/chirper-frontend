import React from 'react'
import { Link } from 'react-router-dom'
import { ReviewCollection } from './ReviewCollection'
import SongPlayer from './SongPlayer'
import ReviewForm from './ReviewForm'

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
            .then(response => response.json())
            .then(user => 
                this.setState({ user: user })
            )
        fetch(`http://localhost:3001/reviews`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then( reviews => this.setState({ reviews: reviews }))
    }   

    addReviewToCollection = (review) => {
        this.setState({
            reviews: [
                ...this.state.reviews, review 
            ]
        })
    }

    render(){
        if(this.state.user === null) {
            return <h1>Loading...</h1>
        }
        return(
            <div style={{color: "#1DB954"}}>
                <h1>Welcome Back {this.state.user.username}!</h1>
                <ReviewForm userID={this.state.user.id} addReview={this.addReviewToCollection} />
                <SongPlayer userID={this.state.user.id}/>
                <ReviewCollection reviews={this.state.reviews}/>
                <Link to="/" style={{color: "#1DB954"}}>Logout</Link>
            </div>
        )
    }


}

