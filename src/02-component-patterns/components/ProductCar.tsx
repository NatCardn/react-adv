import  { ReactElement, createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product,  ProductContextProps, onChanceArgs } from '../interfaces/interfaces';


import styles from '../styles/styles.module.css';



export const ProductContex = createContext({} as ProductContextProps);

const { Provider } = ProductContex; 

export interface Props {
    product: Product;
    children? : ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChanceArgs)=> void;
    value?: number;
}

export const ProductCar = ({children, product, className, style, onChange, value} : Props) => {

    const {counter, increaseBy} = useProduct( {onChange, product, value} );
   
    return (

        <Provider value={{
            counter,
            increaseBy,
            product,
           
            
        }}>
        <div 
            className={`${styles.productCard} ${className}`} 
            style = {style}
         >
        {children}
        </div>
            {/* <ProductImage img={product.img}/>
            
            <ProductTitle title={product.title}/>

            <ProductButtons counter={counter} increaseBy={increaseBy}  /> */}
            
        
        </Provider>
    );
};
