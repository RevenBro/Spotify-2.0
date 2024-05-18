import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback'

function PlayBack({accessToken, play, setPlaying, playing}) {
  return (
    <SpotifyWebPlayer 
    play={playing}
    token={accessToken} 
    uris={play ? [play] : []}
    callback={(e) => {
        if(e.isPlaying) {
            setPlaying(false)
        }
    }}
    />
)
}

export default PlayBack