import "../allComponentsCSS/leftBarComponent.css"
import AuthContext from "../authContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

export default function LeftBar () {
    const {logout} = useContext (AuthContext);
    const navigate = useNavigate ();
    return (
        /*component parent div container*/
        <div className = {"divContainerLeftBar"}>
            {/*logo section*/}
            <div className={"logoLeftBar"}>
                <span className={"material-symbols-outlined"}>
                    school
                </span>
                <h3 className={"hideOnMobile"}>Learnify</h3>
            </div>
            {/*end of logo section*/}

            {/*container of properties settings of left bar*/}
            <div className={"divContainerPropertiesLeftBar"}>
                <button className={"btnsPropertiesLeftBar"} type="button" onClick={()=> {toast.info("Home will be available soon.")}}>
                    <div className = {"childDivContainerPropertiesLeftBar"}>
                        <span className={"material-symbols-outlined"}>
                            home
                        </span>
                        <p className={"hideOnMobile"}>Home</p>
                    </div>
                </button>
                <button className={"btnsPropertiesLeftBar"} type="button" onClick={()=> {toast.info("My courses will be available soon.")}}>
                    <div className = {"childDivContainerPropertiesLeftBar"}>
                        <span className={"material-symbols-outlined"}>
                            import_contacts
                        </span>
                        <p className={"hideOnMobile"}>My courses</p>
                    </div>
                </button>
                <button className={"btnsPropertiesLeftBar"} type="button" onClick={()=> {toast.info("Favorite will be available soon.")}}>
                    <div className = {"childDivContainerPropertiesLeftBar"}>
                        <span className={"material-symbols-outlined"}>
                            favorite
                        </span>
                        <p className={"hideOnMobile"}>Favorite</p>
                    </div>
                </button>
                <button className={"btnsPropertiesLeftBar"} type="button" onClick={()=> {toast.info("Messages will be available soon.")}}>
                    <div className = {"childDivContainerPropertiesLeftBar"}>
                        <span className={"material-symbols-outlined"}>
                            mail
                        </span>
                        <p className={"hideOnMobile"}>Messages</p>
                    </div>
                </button>
                <button className={"btnsPropertiesLeftBar"} type="button" onClick={()=> {toast.info("Settings will be available soon.")}}>
                    <div className = {"childDivContainerPropertiesLeftBar"}>
                        <span className={"material-symbols-outlined"}>
                            brightness_5
                        </span>
                        <p className={"hideOnMobile"}>Settings</p>
                    </div>
                </button>
            </div>
            {/*end of container of properties settings of left bar*/}
            <div className = {"divContainerLogOutLeftBar"}>
                <span className="material-symbols-outlined">
                    logout
                </span>
                <button className={"logOutIconLeftBar hideOnMobile"} 
                        onClick = {()=>{
                            logout();
                            navigate("/")
                            toast.success("Logged out successfully");
                        }}>Logout
                </button>
            </div>
        </div>
        /*end of component parent div container*/
    );
}