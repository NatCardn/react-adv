import { ReactElement } from "react";
import { Props as ProductCarHOCProps } from "../components/ProductCar";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImgProps } from "../components/ProductImage";
import { Props as ProductButtonsProps} from "../components/ProductButtons";


export interface Product {
    id: string;
    title: string;
    img?: string;


}

export interface ProductContextProps {
    counter:number;
    increaseBy: (value:number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
        ({ children, product }: ProductCarHOCProps): JSX.Element;
        Title: (Props: ProductTitleProps) => JSX.Element;
        Image: (Props: ProductImgProps) => JSX.Element;
        Buttons: (Props: ProductButtonsProps) => JSX.Element;

}

export interface onChanceArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}
