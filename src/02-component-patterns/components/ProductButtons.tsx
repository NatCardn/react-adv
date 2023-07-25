import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCar";
import styles from '../styles/styles.module.css';

export interface Props{
    className?:  string;
    style?: CSSProperties;
    value?: number
}
export const ProductButtons = ({className, style, value}: Props) => {

    const {increaseBy, counter} = useContext(ProductContex);
    return(
        <div className={ `${styles.buttonsContainer} ${className}` } style={style}>
                <button 
                    className={ styles.buttonMinus }
                    onClick={ () => increaseBy(-1)}>-</button>

                <div className={ styles.countLabel }>{counter}</div>

                <button 
                    className={ styles.buttonAdd}
                    onClick={ () => increaseBy(+1)}>+</button>
            </div>
    )
}