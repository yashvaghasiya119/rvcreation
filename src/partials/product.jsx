import data from "./product.json";
import "./product.css"

export function Product() {
    return (
        <>
            <div className="main-product-box">
                {data.map((c, i) => {
                    return <div className="box">
                        <img src={require('/public/products/purse.jpg')} alt="" />
                        <h1>Product: {c.name}</h1>
                        <h3>Price: {c.price}</h3>
                        <h4>{c.description}</h4>

                        <button className="btn-explore">Buy now</button>
                    </div>
                })}
            </div>
        </>
    );
}
