import "./product.css";

const Product = ({ img, link, tech, title }) => {
    return (
        <div style={{ width: "40%"}}>
                <h2>{title}</h2>

            <div className="p">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a rel="noreferrer" target="_blank" href="https://github.com/KhaledAbdelhak">
                    <img src={img} alt="" className="p-img" />
                </a>
            </div>
            <div className="tech-div">
            {tech.map(entry => (
                    <div className="p-tech">{entry}</div>
            ))
                } 
            </div>
        </div>
    )
}

export default Product
