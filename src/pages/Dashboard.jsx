import React, { useEffect, useState } from 'react'
import { useAuth } from '../hook/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import ArtistList from '../components/ArtistList'
import PlayBack from '../components/PlayBack'
import SiteLogo from "../assets/images/spotify-logo.svg"

function Dashboard({code}) {
  const accessToken = useAuth(code)
  const [title, setTitle] = useState("")
  const spotifyApi = new SpotifyWebApi({
    clientId:"5ea9cd6ee20143ce91e88ae72605f301"
  })

  const [play, setPlay] = useState("")
  const [playing, setPlaying] = useState(false)
  const [album, setAlbum] = useState("")

  const choosePlay = (item) => {
    setPlay(item.uri.uri)
    setPlaying(true)
  }
  const [artist, setArtist] = useState([])
  useEffect(() => {
    if(!accessToken) return 
    spotifyApi.setAccessToken(accessToken)
  },[accessToken, title, album])

  useEffect(() => {
    if(title) {
      spotifyApi.searchTracks(title).then(res => {
        setArtist(res.body.tracks.items.map(item => {
          const data = {
            img: item.album.images[0].url,
            name: item.name,
            uri: item.artists[0]
          }
          return data
        }))
      })
    }
    else {
      setArtist([])
    }
    },[title, accessToken])


    const [albumList, setAlbumList] = useState([])

    const clickedAlbum = (item) => {

    }

  useEffect(() => {
    if(album) {
      spotifyApi.searchAlbums(album).then(res => {
        setAlbumList(res.body.albums.items.map(item => {
          const data = {
            img: item.images[0].url,
            name: item.name,
            uri: item.artists[0]
          }
          return data
        }));
      })
    }
  },[accessToken,album])
  return (
    <div className='bg-[#181818]'>
    <div className='flex mt-[20px] justify-between px-3 items-center mb-[20px]'>
      <img src={SiteLogo} width={229} height={38}/>
      <div className='flex gap-4'>
        <div className="input-group">
          <input value={title} onChange={(e) => setTitle(e.target.value)} required type="text" name="text" autoComplete="off" className="input"/>
          <label className="user-label">Atrist Name</label>
        </div>
        <div className="input-group">
          <input value={album} onChange={(e) => setAlbum(e.target.value)} required type="text" name="text" autoComplete="off" className="input"/>
          <label className="user-label">Album Name</label>
        </div>
      </div>
    </div>

    <div className='flex justify-between p-5'>
      <div className='w-[48%] flex justify-between gap-4 mb-[90px] flex-wrap'>
        {artist.map(item => (
          <ArtistList choosePlay={choosePlay} item={item}/>
        ))}
      </div>
      <div className='w-[48%] flex justify-between gap-4 mb-[90px] flex-wrap'>
        {albumList.map(item => (
          <ArtistList choosePlay={() => clickedAlbum(item)} item={item}/>
        ))}
      </div>
    </div>
    <div className='fixed w-full bottom-0'>
      <PlayBack setPlaying={setPlaying} playing={playing} play={play} accessToken={accessToken}/>
    </div>
    </div>
  )
}

export default Dashboard