import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        //Si la categoria existe no hace nada
        if( categories.includes(newCategory)) return;
        // setCategories(['Valorant']);
        // con los tres puntos (...) estamos haciendo una copia del array
        // y separando con una , agregamos el nuevo valor
        setCategories([ newCategory , ...categories]);
    };

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* Listado de gif */}
        {
            /* Gif item */
            categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
        }
        
    </>
  )
}
