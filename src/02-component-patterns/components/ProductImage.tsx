import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCar";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}
export const ProductImage = ({img, className, style}: Props) => {
    const {product} = useContext(ProductContex);
    let iToShow :string;
    if (img) {
        iToShow = img;
    }else if (product.img){
        iToShow = product.img
    }else{
        iToShow = noImage
    }
    return(
        <img 
            className={`${styles.productImg} ${className}`} 
            src={iToShow} alt="product in car"
            style={style} />

    )
}