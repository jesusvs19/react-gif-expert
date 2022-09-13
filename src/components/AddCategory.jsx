import React from 'react'
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputValue = (event) => {
        // console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(c => [inputValue,...c]);
        setinputValue('');
        onNewCategory(inputValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder='Buscar gifs' 
            value={inputValue}
            onChange={onInputValue}/>
        </form>
    )
}
