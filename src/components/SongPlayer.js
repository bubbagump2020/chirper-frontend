import React from 'react'
import SpotifyPlayer from 'react-spotify-player'
import { BrowserRouter, Route, Link } from 'react-router-dom'

    


class SongPlayer extends React.Component {



    render() {
        return (
            <div>
               {console.log(this.props)}
               {this.props.playlists.map( playlist => {
                   return(
                       <div>
                           {playlist.name}
                        </div>
                   )
               })}
            </div>

        )
    }

}

export default SongPlayer