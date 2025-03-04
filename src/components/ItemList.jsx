import React from 'react'
import { Link, useLocation } from 'react-router-dom'; //useLocation exibe informação da rota atual


import SingleItem from './SingleItem';

const ItemList = ({title, items, array, path, idPath}) => {

    const pathname = useLocation().pathname //pathname é a rota em que estamos

    const finalItems = pathname === "/" ? items : Infinity


    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>

                {pathname === "/" ? 
                <Link to={path} className="item-list__link">
                    Mostrar tudo
                </Link> : 
                <></>}
                
            </div>

            <div className="item-list__container">
                {array.filter((valorAtual, index) => index < finalItems)
                .map((valorAtual, index) => (
                <SingleItem key={title + index} artistsInfo={valorAtual} idPath={idPath}/>
                ))}
                
            </div>
        </div>
    )
}

export default ItemList
