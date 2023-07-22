import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

const product = {
    id:'1',
    title:'Coffe Mug - Card',
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping</h1>
            <hr />
            <div style= {{
                display:"flex",
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCar 
                        product={ product }
                        className="bg-dark text-white">

                    <ProductImage className = "custom-image" />
                    <ProductTitle className=" text-bold" />
                    <ProductButtons  className="custom-buttons"/>
                </ProductCar>


                <ProductCar product={ product } className="bg-dark text-white">

                    <ProductCar.Image className = "custom-image" />
                    <ProductCar.Title className=" text-bold"/>
                    <ProductCar.Buttons className="custom-buttons" />
                </ProductCar>

                <ProductCar 
                    product={ product }
                    style = {{
                        backgroundColor:'aqua'
                    }}>

                    <ProductImage style={{
                        width: 'calc(100% - 40px)',
                        padding: '20px',
                        borderRadius:'30px'
                        
                    }}  />
                    <ProductTitle  style={{
                        fontSize: '26px'
                    }}/>
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCar>

                
            </div>
        </div>
    );
};

