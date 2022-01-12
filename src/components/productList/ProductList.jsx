import "./productList.css";
import Product from "../product/Product";
import {products} from '../../data'


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projets</h1>
            </div>
            <div className="pl-list">
                {products.map(product => (
                    <Product link={product.link} key={product.id} img={product.img}/>
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
