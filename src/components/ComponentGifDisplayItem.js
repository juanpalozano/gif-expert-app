import React from 'react'

export const ComponentGifDisplayItem = (props) => {
    return (
        <div className="gif-card animate__animated animate__zoomIn">
            <img src={props.url} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}