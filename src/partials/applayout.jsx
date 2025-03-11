import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Applayout(){

    return<>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
}