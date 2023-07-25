import { useEffect, useState } from "react";
import { Product, onChanceArgs } from "../interfaces/interfaces";

interface UseProductArgsProps{
    product: Product;
    onChange?: (args: onChanceArgs) =>void;
    value?: number;
}

export const useProduct = ( {onChange, product, value = 0}: UseProductArgsProps) => {
    const [counter, setCounter] = useState<number>(value);


    const increaseBy = (value:number) =>{

      
        const newValue= Math.max(counter + value, 0)
        setCounter(newValue)
       
       onChange && onChange({count: newValue, product})
    }

    useEffect(() => {
        setCounter( value )
    },[value]);

    return {
        // variables
        counter,
        // methods
        increaseBy
    }
};

