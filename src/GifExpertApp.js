import React, { useState } from 'react';
import { ComponentCategoryAdd } from './components/ComponentCategoryAdd';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samuray X', 'Dragon Ball', 'Cartoon Network']);
    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }
    return (
        <div>
            <h2>Gif Expert App</h2>
            <ComponentCategoryAdd setCategories={ setCategories } />
            <hr/>
            <button onClick={handleAdd}>
                Agregar Categoría
            </button>
            <ol>
                {
                    categories.map((category, index) => <li key={index}>{category}</li>)
                }
            </ol>
        </div>
    )
}
