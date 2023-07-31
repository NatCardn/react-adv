import {products} from "../data/products"
import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components";

const product = products[0];

export const ShoppingPage = () => {

    return (
      <div>
        <h1>Shopping Store</h1>
        <hr />
            
                    <ProductCar
                        key={product.id}
                        product={ product }
                        initialValues = {{
                            count:4,
                            maxCount:10
                        }} >

                    {
                        ({ reset, increaseBy, count, isMaxCountReached })=> (

                            <>
                            <ProductImage  />
                            <ProductTitle />
                            <ProductButtons  />

                          
                            </>
                        )
                    }


                </ProductCar>
           
           
                


               
                

          
                       

        </div>
    );
};

