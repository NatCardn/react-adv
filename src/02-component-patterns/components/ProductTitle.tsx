import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCar";
import styles from '../styles/styles.module.css';

export interface Props{
    title? : string;
    className? : string;
    activeCLass? : string;
    style?: CSSProperties;
}

export const ProductTitle = ({title, className, style }: Props) => {
    const {product} = useContext(ProductContex);
    
    return (
        <span 
        className={ `${styles.productDescription} ${className}` } 
        style={style}
        >
            {title ? title : product.title}
        </span>

    )
}