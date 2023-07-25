import { useShoppingCart } from "../hooks/useShoppingCart";
import {products} from "../data/products"
import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'


export const ShoppingPage = () => {
    const {onProductCountChange, shoppingCart} =useShoppingCart();

    return (
        <div >
            <h1>Shopping</h1>
            <hr />
            <div style= {{
                display:"flex",
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

            {
                products.map(produc => (
                    <ProductCar
                        key={produc.id}
                        product={ produc }
                        className="bg-dark text-white"
                        onChange = {onProductCountChange}
                        value = {
                            
                            shoppingCart[produc.id]?.count || 0}
                       >

                    <ProductImage className = "custom-image" />
                    <ProductTitle className=" text-bold" />
                    <ProductButtons  className="custom-buttons"/>
                </ProductCar>
                ))
            }
                


               
                
            </div>

            <div className="shopping-cart">
            {Object.entries(shoppingCart).map(([key, product]) => (
                        
                        <ProductCar
                        key={key}                    
                        product={ product }
                        className="bg-dark text-white"
                        style={{ width: '100px'}}
                        onChange = {onProductCountChange}
                        value= {product.count}>

                        <ProductImage className = "custom-image" />
                        <ProductButtons  
                        className="custom-buttons"
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}/>
                        </ProductCar>
                ))}
                

                

            </div>
                        <code>
                            {JSON.stringify(shoppingCart, null, 5)}
                        </code>

        </div>
    );
};

