import React from 'react'
import SongItem from './SongItem'
import { useState } from 'react'

const SongList = ({songsArray}) => {

  const [items, setItems] = useState(5)
  
  function loadMore(){
    setItems(items + 5)
  }

  return (
    <div className="song-list">

        {songsArray.filter((cureentValue, index) => index < items)
        .map((currentSongObj, index) => <SongItem {...currentSongObj} index={index} key={index}/>)}
        

        <p className='song-list__see-more' onClick={loadMore}>Ver mais</p>
    </div>
  )
}

export default SongList
