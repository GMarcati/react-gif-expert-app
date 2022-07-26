import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
            const newImages = await getGifs( category );
            setImages(newImages);
            setIsLoading(false);
    }

    //Sirve para disparar efectos secundarios,
    //en este caso cuando el componente se carga por primera vez
    //Con el segundo argumento ", []" estamos indicando que se dispare
    //la primera vez cuando se crea el 
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
