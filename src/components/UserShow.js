import React from 'react'
import { Link } from 'react-router-dom'
import { ReviewCollection } from './ReviewCollection'
import SongPlayer from './SongPlayer'
import ReviewForm from './ReviewForm'

export class UserShow extends React.Component {

    state = {
        user: null,
        reviews: [],
        playlists: []
    }

    componentDidMount(){
        console.log(this.props.match.params)
        if(!this.props.match.params.access_token){
            window.open('http://localhost:3001/auth/spotify')
        }        
        const token = this.props.match.params.access_token
        const localToken = localStorage.getItem('token')
        fetch(`https://api.spotify.com/v1/me/playlists`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ playlists: data.items }))
        
        fetch('http://localhost:3001/current_user', { headers: {
            Authorization: `Bearer ${localToken}`
        }})
            .then( r => r.json() )
            .then( user => this.setState({ user }))
    }   

    addReviewToCollection = (review) => {
        this.setState({
            reviews: [
                ...this.state.reviews, review 
            ]
        })
    }

    render(){
        // console.log(this.state.user)
        
        if(this.state.user === null) {
            return <h1>Loading...</h1>
        }
        return(
            <div>
                <h1>Welcome Back {this.state.user.username}!</h1>
                <ReviewForm userID={this.state.user.id} addReview={this.addReviewToCollection} />
                <SongPlayer userID={this.state.user.id} playlists={this.state.playlists} />
                <ReviewCollection reviews={this.state.reviews}/>
                <Link to="/">Logout</Link>
            </div>
        )
    }


}

