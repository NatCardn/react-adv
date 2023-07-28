import  { ReactElement, createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, Product,  ProductCardHandlers,  ProductContextProps, onChanceArgs } from '../interfaces/interfaces';


import styles from '../styles/styles.module.css';



export const ProductContex = createContext({} as ProductContextProps);

const { Provider } = ProductContex; 

export interface Props {
    product: Product;
    // children? : ReactElement | ReactElement[];
    children: (args: ProductCardHandlers)=> JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChanceArgs)=> void;
    value?: number;
    initialValues? : InitialValues
}

export const ProductCar = ({children, product, className, style, onChange, value, initialValues} : Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} 
    = useProduct( {onChange, product, value, initialValues} );
   
    return (

        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
           
            
        }}>
        <div 
            className={`${styles.productCard} ${className}`} 
            style = {style}
         >
        {
        children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,

            increaseBy,
            reset,
    

        })
        }
        </div>
            {/* <ProductImage img={product.img}/>
            
            <ProductTitle title={product.title}/>

            <ProductButtons counter={counter} increaseBy={increaseBy}  /> */}
            
        
        </Provider>
    );
};
