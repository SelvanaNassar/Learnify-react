// Styles
import "../allComponentsCSS/signInPage.css";

// React
import { useState, useContext } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Context
import  AuthContext  from "../authContext/AuthContext";

// Notification Toastify library
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
        /*Div parent*/
        <div className={"ParentDivSignIn"}>

            {/*welcome section container*/}
            <div className={"welcomeContainerDivSignIn"}>

                {/*logo section container*/}
                <div className={"iconTextFlexSignIn"}>

                    <span className={"material-symbols-outlined"}>
                            school
                    </span>

                    <h3>Learnify</h3>

                </div>

                {/*welcome message container*/}
                <div>

                    <h1>Welcome back!</h1>
                    <h4>Continue your learning journey</h4>
                    <p>Access your account to explore courses, <br/>track your progress and achieve your goals.</p>
                
                </div>

                <img src="/education.jpg" alt="Education" className="educationImageSignIn" />

                {/*three div containers hold short info and icons*/}

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

            </div>

            {/*signin container */}
            <div className={"signInInfoDivContainerSignIn"}>

                <div className={"startSignMessageSignIn"}>
                    <h3>Sign in to your account</h3>
                    <p>Enter your credentials to continue</p>
                </div>

                {/*form that hold inputs*/}
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

                    {/*male or female section*/}   
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

                    {/*sign in button*/}
                    <input className={"signInbtnSignIn"} 
                            type="submit" 
                            value="Sign in" 
                            onClick={handleChecking}
                    />
                    
                    {/*signin by other way and create account parent*/}
                    <div className={"signOtherWayACreateAccountSignIn"}>

                        {/*sign in by other way*/}
                        <p>or continue with</p>

                        <div className={"googleGithubDivSignIn"}>

                            <button type="button" 
                                    onClick={()=> {toast.info("Google authentication will be available soon.")}}
                            >       Google
                            </button>

                            <button type="button" 
                                    onClick={()=> {toast.info("GitHub authentication will be available soon.")}}
                            >       GitHub
                            </button>
                        
                        </div>

                        {/*create account section*/}
                        <p>Don't have an account? 
                            <button className={"createAccountSignIn"} 
                                    type="button" 
                                    onClick={()=> {toast.info("Account creation will be available soon.")}}
                            >       Create one
                            </button>
                        </p>
                       
                    </div>

                </form>
              
            </div>

        </div>
       
    );
}