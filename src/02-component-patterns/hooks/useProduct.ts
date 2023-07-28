import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChanceArgs } from "../interfaces/interfaces";

interface UseProductArgsProps{
    product: Product;
    onChange?: (args: onChanceArgs) =>void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( {onChange, product, value = 0, initialValues}: UseProductArgsProps) => {

    const maxCount = initialValues?.maxCount;

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value:number) =>{

        if((maxCount ===counter && value>0) || (initialValues?.count === counter && value<0 )) return;
     
        const newValue= Math.max(counter + value, 0)
        setCounter(newValue)
       
       onChange && onChange({count: newValue, product})
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }
   
    useEffect(() => {
        if( !isMounted.current) return;
        setCounter( value )
    },[value]);
    useEffect(() => {
        isMounted.current =true;
    }, []);
    console.log(isMounted)
    return {
        // variables
        counter,
        isMaxCountReached: !!initialValues?.count && maxCount === counter,
        maxCount,
        // methods
        increaseBy, 
        reset
       
        
    }
};

