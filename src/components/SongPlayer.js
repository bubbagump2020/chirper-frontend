import React from 'react'
import SpotifyPlayer from 'react-spotify-player'


    


class SongPlayer extends React.Component {


    componentDidMount() {
        fetch('http://localhost:3001/auth/spotify')
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
    }



    render() {
        return (
            <div>
                
            </div>
        )
    }

}

export default SongPlayer