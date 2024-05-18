import React from 'react'

function Login() {
  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=5ea9cd6ee20143ce91e88ae72605f301&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played"
  return (
    <div className='bg-[#181818] h-[100vh] flex items-center justify-center'>
      <a className='login-href' href={AUTH_URL}>Login Spotify</a>
    </div>
  )
}

export default Login