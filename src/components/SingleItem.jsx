import React from 'react'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleItem = ({artistsInfo, idPath}) => {
    return (
        <a href={`${idPath}/${artistsInfo.id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img
                        className="single-item__image"
                        src={artistsInfo.image}
                        alt={`Imagem do Artista ${artistsInfo.name}`}
                    />
                </div>

                <FontAwesomeIcon
                    className="single-item__icon "
                    icon={faCirclePlay}
                />
            </div>

            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">
                      {artistsInfo.name}
                    </p>
                </div>

                <p className="single-item__type">{artistsInfo.artist ?? "Artista"}</p>
            </div>
        </a>
    )
}

export default SingleItem
