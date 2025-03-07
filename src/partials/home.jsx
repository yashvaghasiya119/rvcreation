import { NavLink } from "react-router";

export function Home() {
    let data = [
        {
            productname: "product",
            image: "/src/assets/main1.png",
            price: 200,
            special: "for sepdfdl d; d;fdfdfdfd dfdffdd dfdfkdd[]dg r dfdfdsddsdsds sd"
        },
        {
            productname: "product",
            image: "/src/assets/main1.png",
            price: 200,
            special: "for sepdfdl d; d;fdfdfdfd dfdffdd dfdfkdd[]dg r dfdfdsddsdsds sd"
        },
        {
            productname: "product",
            image: "/src/assets/main1.png",
            price: 200,
            special: "for sepdfdl d; d;fdfdfdfd dfdffdd dfdfkdd[]dg r dfdfdsddsdsds sd "
        },
    ]

    return <>
        <div>
            <div className="home-page1 " data-aos="fade-up" data-aos-duration="1300">
                <div className="left">
                    <div className="inner-left">
                        <h1>Celebrating Handmade, Celebrating You</h1>
                        <h3>At Rvcreation, we’re dedicated to the timeless tradition of handmade goods. Each product is a reflection of the artisan's skill, creativity, and passion.</h3>
                        <NavLink to="/product"><button>Explore more</button></NavLink>
                    </div>
                </div>
                <div className="right"></div>
            </div>
            <div className="breackpoint"></div>
            <div className="home-page2">
                <h2 className="tranding-heading">Our Tranding products</h2>
                <div className="t-p-card">
                    {
                        data.map((c, i) => {
                            return <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                                <img key={i} src={c.image} alt="" className="t-p-image" />
                                <div className="description">
                                    <h3>{c.productname}</h3>
                                    <h3>price ${c.price}</h3>
                                    <h5>special: {c.special}</h5>
                                    <button className="btn-explore">explore more</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="breackpoint"></div>
            <div className="home-details">
                <div className="contect">
                    <div className="logo-footer">
                        <img src="/public/Rvlogo.png" alt="" />
                        <h2>More Creation, More Possibilities</h2>
                    </div>
                    <div className="first">
                        <i class="fa-solid fa-phone"><span>+91 12345 67890 /232323223</span></i>
                        <i class="fa-solid fa-envelope"><span>sdsds@sds.sd</span></i>
                        <i class="fa-solid fa-location-dot"><span >40 ,nand bunglows , mota varacha ,surat</span></i>
                    </div>
                    <div className="second first">
                        <h2>Social media</h2>
                        <a href="#"><i class="fa-brands fa-instagram"><span>Instagram account</span></i></a>
                    </div>
                </div>
                <div className="tag"></div>
            </div>
        </div>
    </>
}