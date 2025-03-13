import { useParams } from "react-router";
import data from "./product.json";
import { useEffect, useState } from "react";
import { Similercard } from "./similercard";

export function Innerproduct() {
    let { id } = useParams(); // Getting the id from the URL
    console.log(id);
    const [filterdata, setfilterdata] = useState(null);  // Initialize state as null
    const [related, setrelated] = useState()

    function fdata() {
        // Filter data based on id and update filterdata state
        const findfilterdata = data.filter((c) => Number(c.id) === Number(id));
        // console.log(findfilterdata);

        // If there's a match, set the first match, otherwise set null
        setfilterdata(findfilterdata.length > 0 ? findfilterdata[0] : null);
    }

    function sdata() {
        if (filterdata) {
            const similerdata = data.filter((c) => c.name === filterdata.name)
            setrelated(similerdata)
        }
    }
    useEffect(() => {
        fdata()
    }, [id]); 
    useEffect(() => {
        if(filterdata){
            sdata()
        }
    }, [filterdata]); 
 
    if (!filterdata) {
        return <div>Loading...</div>; // Show a loading message while waiting for filterdata
    }

    return (
        <>
            <h1 style={{ textAlign: "center", color: "#3b4c57", margin: "2.5vh 0" }}>Product Details</h1>
            <div className="inner-product">
                <div className="left-inner-product">
                    <img className="inner-p-i" src={filterdata.img} alt={filterdata.name} />
                </div>
                <div className="right-inner-product">
                    <h2 className="producy-description">{filterdata.description}</h2>
                    <h4 className="product-Catogory "> &bull; Catogory: {filterdata.name}</h4>
                    <h3 className="product-price">₹{filterdata.price}</h3>
                    <h4>For buying any product you can call on belows number</h4>
                    <div className="related-main">
                        <Similercard data={related}/>
                    </div>
                </div>
            </div>
        </>
    );
}
