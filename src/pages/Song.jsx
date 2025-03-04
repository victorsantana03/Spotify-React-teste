import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {

  const {id} = useParams();

  const {image, name, duration, artist, audio, index} = 
  songsArray.filter((currentSongObj, index) => currentSongObj.id === Number(id))[0]

  const artistObj = 
  artistArray.filter((currentArtistObj, index) => currentArtistObj.name === artist)[0]

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist)

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id

  return (

    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt="" />
        </div>

      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className='song__artist-image'>
          <img 
          width={75}
          height={75}
          src={artistObj.image} alt=""/>
        </Link>

        <Player duration={duration} randomIdFromArtist={randomIdFromArtist}/>

        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>

  )
}

export default Song
