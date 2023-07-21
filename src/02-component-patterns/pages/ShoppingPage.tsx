import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components";

const product = {
    id:'1',
    title:'Coffe Mug - Card',
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping</h1>
            <hr />
            <div style= {{
                display:"flex",
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCar product={ product }>

                    <ProductImage/>
                    <ProductTitle title={"Hello"} />
                    <ProductButtons  />
                </ProductCar>


                <ProductCar product={ product }>

                    <ProductCar.Image/>
                    <ProductCar.Title />
                    <ProductCar.Buttons  />
                </ProductCar>
                
            </div>
        </div>
    );
};

