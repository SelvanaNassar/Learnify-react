import { Outlet } from "react-router-dom"
import LeftBar from "../allComponents/LeftBar";

import "./layout.css"

export default function Layout (){
    /*this component make a layout we can use it when we want to show the <LeftBar /> and the other page, so we do it by write <Layout /> then the component we need it and they will appeare with this style*/
    return (
        <div className={"divContainerLayout"}>
            <div className={"leftBarContainerLayout"}>
                <LeftBar />    
            </div>
            <div className={"outletContainerLayout"}>
                {/*<Outlet /> means the changed component*/}
                <Outlet />
            </div> 
        </div>
    );
}