import React from 'react';
//import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ComponentGifDisplayItem } from './ComponentGifDisplayItem';

export const ComponentGifDisplay = ({ category }) => {
    
    const {data:items, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Loading</p> }
            <div className="gif-cards-container"> 
                {
                    items.map(data => 
                        <ComponentGifDisplayItem
                            key={data.id}
                            { ...data }
                        />
                    )
                }
            </div>
        </>
    )
}