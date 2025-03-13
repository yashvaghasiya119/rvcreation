
import { NavLink } from "react-router";
import data from "./product.json";

export function Similercard({ data }) {
    console.log("sdata", data);
    return <>
        {
            data ? <div className="r-flex">
                {data.map((c, i) => {
                    return <NavLink style={{ textDecoration: "none" }} to={`/product/${c.id}`}>
                        <div key={i} className="related-card">
                            <img src={c.img} alt="" />
                            <h2>{c.name}</h2>
                        </div>
                    </NavLink>
                })}
            </div> : <div>
                <h2>loading..</h2>
            </div>
        }
    </>
}