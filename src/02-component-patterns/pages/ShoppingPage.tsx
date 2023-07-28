import {products} from "../data/products"
import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {

    return (
      <div>
        <h1>Shpping Store</h1>
        <hr />
            
                    <ProductCar
                        key={product.id}
                        product={ product }
                        className="bg-dark text-white"
                        initialValues = {{
                            count:4,
                            maxCount:10
                        }} >

                    {
                        ({ reset, increaseBy, count, isMaxCountReached })=> (

                            <>
                            <ProductImage className = "custom-image" />
                            <ProductTitle className=" text-bold" />
                            <ProductButtons  className="custom-buttons"/>

                            <button
                                onClick={reset}>
                                Reset
                            </button>

                            <button onClick={() =>increaseBy(-2)}>-2</button>
                            {(!isMaxCountReached && <button onClick={() =>increaseBy(2)}>+2</button>)}


                            <span>{count}</span>
                            </>
                        )
                    }


                </ProductCar>
           
           
                


               
                

          
                       

        </div>
    );
};

