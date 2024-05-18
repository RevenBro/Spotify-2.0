import React from 'react'

function ArtistList({item, choosePlay}) {
  return (
    <div onClick={() => choosePlay(item)} className='atrist-card flex flex-col space-y-2' key={item.uri.id}>
        <img src={item.img} width={140} height={140}/>
        <h2>{item.name}</h2>
        <p>{item.uri.name}</p>
    </div>
  )
}

export default ArtistList