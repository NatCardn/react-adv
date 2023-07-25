import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart}>({});

    const onProductCountChange = ({count, product} : {count:number, product: Product}) => {
        setShoppingCart( oldShoppincart =>{ 

            const productInCart : ProductInCart = oldShoppincart[product.id] || {...product, count:0}

            if( Math.max(productInCart.count + count, 0) > 0){
                productInCart.count += count;
                return{
                    ...oldShoppincart,
                    [product.id]:productInCart
                }
            }
            const {[product.id]: toDelete, ...rest} = oldShoppincart;
            return {...rest};

        })


        //     if(count===0){
                
        //         return(
        //             setShoppingCart( oldShoppincart =>{
        //                 const {[product.id]: toDelete, ...rest} = oldShoppincart;
        //                 return rest;
                        
        //             })
        //         )
                
        //     }
        //     setShoppingCart( oldShoppincart =>{
                
        //         return{
        //             ...oldShoppincart,  
        //             [product.id]:{...product, count}

        //         }
            
            
        // })
    }

    return {

        // variables:
        shoppingCart,

        // methods:

        onProductCountChange,

    }
};

