import React, { useState } from 'react';
import { ComponentCategoryAdd } from './components/ComponentCategoryAdd';
import { ComponentGifDisplay } from './components/ComponentGifDisplay';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div>
            <header>
                <h2>Gif Expert App</h2>
            </header>    
            <hr/>    
            <main>
            <ComponentCategoryAdd setCategories={ setCategories } />
            <div>
                {
                    categories.map((category, index) => 
                        <ComponentGifDisplay
                            key={category}
                            category={category}
                        />
                    )
                }
            </div>
            </main>
        </div>
    )
}
