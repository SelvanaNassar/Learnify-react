import "../allComponentsCSS/signInPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import  AuthContext  from "../authContext/AuthContext";

import {toast} from "react-toastify";


export default function SignInPage () {
    const {login} = useContext(AuthContext);

    const navigate = useNavigate ();

    const [formData, setformData] = useState ({userName : "", password : "", gender : ""});

    function changeUserName (name) {
        setformData ({...formData, userName : name}); }
    function changePassword (pass) {
      setformData ({...formData, password : pass})
    }
    function changeGender (gen) {
      setformData ({...formData, gender : gen})
    }

    function handleChecking (e) {
        e.preventDefault();
        if (formData.userName !=="" && formData.password !== "" && formData.gender !== "") {
            const userData = {
                userName: formData.userName,
                password: formData.password,
                gender: formData.gender};
            login(userData)
            navigate("/home")
            }
        else {
            toast.error("Please fill all required fields");
        }
    }
    

    return (
        /*the Div parent that contains all properties*/
        <div className={"ParentDivSignIn"}>

            {/*welcome section Div container*/}
            <div className={"welcomeContainerDivSignIn"}>
                {/*logo section Div container*/}
                <div className={"iconTextFlexSignIn"}>
                    <span className={"material-symbols-outlined"}>
                            school
                    </span>
                    <h3>Learnify</h3>
                </div>
                {/*end of logo section Div container*/}

                {/*welcome message section Div container*/}
                <div>
                    <h1>Welcome back!</h1>
                    <h4>Continue your learning journey</h4>
                    <p>Access your account to explore courses, <br/>track your progress and achieve your goals.</p>
                </div>
                {/*end of welcome message section Div container*/}
                <img src="/education.jpg" alt="Education" className="educationImageSignIn" />

                {/*three div containers that hold short info and icons*/}
                <div className={"iconTextFlexSignIn"}>
                    <span className={"material-symbols-outlined allIconsBGSignIn"}>
                        menu_book
                    </span>
                    <div>
                        <h5>High quality courses</h5>
                        <p>Learn from industry experts</p>
                    </div>
                </div>
                <div className={"iconTextFlexSignIn"}>
                    <span className={"material-symbols-outlined allIconsBGSignIn"}>
                        finance_mode
                    </span>
                    <div>
                        <h5>Track progress</h5>
                        <p>Monitor your learning journey</p>
                    </div>
                </div>
                <div className={"iconTextFlexSignIn"}>
                    <span className={"material-symbols-outlined allIconsBGSignIn"}>
                        trophy
                    </span>
                    <div>
                        <h5>Achieve goals</h5>
                        <p>Get certified and grow</p>
                    </div>
                </div>
                {/*end of three div containers that hold short info and icons*/}
            </div>
            {/*end of welcome section Div container*/}

            {/*sign in section Div container */}
            <div className={"signInInfoDivContainerSignIn"}>
                <div className={"startSignMessageSignIn"}>
                    <h3>Sign in to your account</h3>
                    <p>Enter your credentials to continue</p>
                </div>
                {/*form that hold all sign in inputes*/}
                <form className={"FormSignIn"}>
                    {/*email section*/}
                    <div>
                        <label htmlFor="email">Email address</label>
                        <div className={"emailPasswordStylingSignIn"}>
                            <span className={"material-symbols-outlined"}>
                                mail
                            </span>
                            <input id="email" className={"emailInputSignIn"} type="email" placeholder="Enter your email" value={formData.userName} onChange={(event)=>{changeUserName(event.target.value)}} />
                        </div>
                    </div>
                    {/*end of email section*/}
                    {/*password section*/}
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className={"emailPasswordStylingSignIn"}> 
                            <span className={"material-symbols-outlined"}>
                                lock
                            </span>
                            <input id="password" className={"passwordInputSignIn"} type="password" placeholder="Enter your password" value={formData.password} onChange={(event)=>{changePassword(event.target.value)}} />
                        </div>
                    </div>
                    {/*end of password section*/}

                    {/*mail or female section*/}   
                    <div className={"mailFemailRadioBtnSignIn"}>
                        <div>
                            <input id="male" type="radio" value="male" name="gender" onChange={(event)=>{changeGender(event.target.value)}}></input>
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input id="female" type="radio" value="female" name="gender" onChange={(event)=>{changeGender(event.target.value)}}></input>  
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    {/*end of mail or female section*/}

                    {/*sign in button*/}
                    <input className={"signInbtnSignIn"} type="submit" value="Sign in" onClick={handleChecking}></input>
                    {/*end of sign in button*/}
                    
                    {/*parent of sign in by other way and create account*/}
                    <div className={"signOtherWayACreateAccountSignIn"}>
                        {/*sign in by other way*/}
                        <p>or continue with</p>
                        <div className={"googleGithubDivSignIn"}>
                            <button type="button" onClick={()=> {toast.info("Google authentication will be available soon.")}}>Google</button>
                            <button type="button" onClick={()=> {toast.info("GitHub authentication will be available soon.")}}>GitHub</button>
                        </div>
                        {/*end of sign in by other way*/}

                        {/*create account section*/}
                        <p>Don't have an account? 
                            <button className={"createAccountSignIn"} type="button" onClick={()=> {toast.info("Account creation will be available soon.")}}>Create one</button>
                        </p>
                        {/*end of create account section*/}
                    </div>
                    {/*end of parent of sign in by other way and create account*/}

                </form>
                {/*end of form that hold all sign in inputes*/}
            </div>
            {/*end of sign in section Div container */}

        </div>
        /*end of the Div parent that contains all properties*/
    );
}