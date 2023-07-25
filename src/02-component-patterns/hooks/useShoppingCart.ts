import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart}>({});

    const onProductCountChange = ({count, product} : {count:number, product: Product}) => {
        setShoppingCart( oldShoppincart =>{ 

            if(count===0){
                    const {[product.id]: toDelete, ...rest} = oldShoppincart;
                    return {...rest};
                }
                        
                return{
                    ...oldShoppincart,  
                    [product.id]:{...product, count}
                }
                  
                
            })
          }

    return {

        // variables:
        shoppingCart,

        // methods:

        onProductCountChange,

    }
};

