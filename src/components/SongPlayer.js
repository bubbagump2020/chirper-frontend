import React from 'react'
import SpotifyPlayer from 'react-spotify-player'
import { BrowserRouter, Route, Link } from 'react-router-dom'

    


class SongPlayer extends React.Component {


    // componentDidMount() {
    //     fetch('http://localhost:3001/auth/spotify')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }

    fetchSpotify = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/auth/spotify')
            .then(response => response.json())
            .then(data => console.log(data))
    }



    render() {
        return (
            <div>
                <button onClick={e => this.fetchSpotify(e)}>Click me for Spotify!</button>
            </div>
        )
    }

}

export default SongPlayer