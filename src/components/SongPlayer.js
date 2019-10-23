import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

var ClientOAuth2 = require('client-oauth2')

var githubAuth = new ClientOAuth2({
    clientId: 'abc',
    clientSecret: '123',
    accessTokenUri: 'https://github.com/login/oauth/access_token',
    authorizationUri: 'https://github.com/login/oauth/authorize',
    redirectUri: 'http://example.com/auth/github/callback',
    scopes: ['notifications', 'gist']
  })

class SongPlayer extends React.Component{
    constructor(){
        super()
        this.state = {
            token: null,
            item: {
              album: {
                images: [{ url: "" }]
              },
              name: "",
              artists: [{ name: "" }],
              duration_ms:0,
            },
            is_playing: "Paused",
            progress_ms: 0
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        githubAuth.jwt.getToken(token)
        .then(function (user) {
            console.log(user)
        })
    }



    render(){
        console.log(this.state.token)
        return(
            <div>
            </div>
        )
    }

}

export default SongPlayer