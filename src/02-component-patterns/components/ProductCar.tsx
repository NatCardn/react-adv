import { ReactElement, createContext, useContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';


import styles from '../styles/styles.module.css';



export const ProductContex = createContext({} as ProductContextProps);

const { Provider } = ProductContex; 


export const ProductCar = ({children, product} : ProductCardProps) => {

    const {counter, increaseBy} = useProduct();
   
    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
        <div className={styles.productCard} >
        {children}
        </div>
            {/* <ProductImage img={product.img}/>
            
            <ProductTitle title={product.title}/>

            <ProductButtons counter={counter} increaseBy={increaseBy}  /> */}
            
        
        </Provider>
    );
};
