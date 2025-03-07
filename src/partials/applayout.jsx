import { Outlet } from "react-router";
import { Navbar } from "./navbar";

export function Applayout(){

    return<>
    <Navbar/>
    <Outlet/>
    </>
}