import React, {useState} from 'react';
import PropTypes from "prop-types";

export const ComponentCategoryAdd = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 3) {
            setCategories( categories => [...categories, inputValue]);
            setInputValue('');
        }
        else {
            alert('La categoría debe tener minimo 3 caracteres.');
        }       
    }
    return (
        <div>
            <h2>Add Category</h2>
            <form onSubmit={ handleSubmit }>
                <input
                    name=""
                    onChange={ handleInputChange }
                    type="text"
                    value={ inputValue }
                />
            </form>            
        </div>
    )
}
ComponentCategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
/*
ComponentCategoryAdd.defaultProps = {
    greetingTitle: 'Default greeting title.',
    greetingSubtitle: 'Default greeting subtitle.',
}
*/