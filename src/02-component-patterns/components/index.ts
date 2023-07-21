import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCar as ProductCardHOC } from "./ProductCar";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCar: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title : ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCar;