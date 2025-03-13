import data from "./product.json";
import "./product.css"
import { NavLink } from "react-router";

export function Product() {
    return (
        <>
            <div className="main-product-box">
                {data.map((c, i) => {
                    return <div key={i} className="box" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <img src={c.img} alt="" />
                        <h1>Product: {c.name}</h1>
                        <h3>Price: {c.price}</h3>
                        <h4>{c.description}</h4>
                       <NavLink  to={`/product/${c.id}`}> <button >Buy now</button></NavLink>
                    </div>
                })}
            </div>
        </>
    );
}
