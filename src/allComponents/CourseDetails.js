// Styles
import "../allComponentsCSS/courseDetails.css"

// React
import { useEffect, useState } from "react";

// React Router
import { useParams, useNavigate  } from "react-router-dom";

// Notification Toastify library
import {toast} from "react-toastify";

export default function CourseDetails(){ 

    const navigate = useNavigate();
    const {id} = useParams();

    const [courseDetails, setCourseDetails] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`/courses.json`)
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Course not found.");
                }
                return response.json()
            })
            .then((data)=>{
                const course = data.courses.find(
                    course => course.id === Number(id)
                );
                if(!course){
                    throw new Error("Course not found");
                }
                setCourseDetails(course); 
                setLoading(false);
            })
            .catch(()=>{
                setError("Something went wrong while loading the course.");
                setLoading(false);
            });
            //using array to avoid fetch from running every re-rendering, it will work when id change only
    }, [id])   

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }     

    return(
        /*Div parent contains all component*/
        <div className={"ParentDivcourseDetails"} >
            
            {/*back button, use navigate(-1) to back one step*/}
            <button className={"BackBtnCourseDetails"} onClick={()=>{navigate(-1)}}>
               
                <span className={"material-symbols-outlined"}>
                    arrow_back
                </span> 
               
                <span>Back</span>

            </button>

           

            {/*div parent of basic course information and start learning button*/}
            <div className={"BasicInfoCourseDetails"}>

                <img src={courseDetails.photo} alt={courseDetails.title} className={"photoCourseDetails"}></img>
                
                <div>
                    
                    <h2>{courseDetails.title}</h2>

                    {/*level information*/}
                    <div className={"flexBasicInfoCourseDetails levelBasicInfoCourseDetails"}>

                        <span className={"material-symbols-outlined"} style={{color: "rgb(240, 174, 8)"}}>
                            kid_star
                        </span>

                        <h3>{courseDetails.level}</h3>

                    </div>

                    {/*teacher information*/}
                    <div className={"flexBasicInfoCourseDetails"}>

                        <img src="/teacher.webp" alt="teacher" className={"teacherIconCourseDetails allIconsBGCourseDetails"}/>

                        <div>
                            <p>Teacher</p>
                            <h3>{courseDetails.teacher}</h3>
                        </div>

                    </div>

                    {/*category section*/}
                    <div className={"flexBasicInfoCourseDetails"}>

                        <span className={"material-symbols-outlined allIconsBGCourseDetails"} style={{color: "rgb(78, 92, 223)"}}>
                            book_ribbon
                        </span>

                        <div>
                            <p>Category</p>
                            <h3>{courseDetails.category}</h3>
                        </div>

                    </div>

                    {/*price section*/}
                    <div className={"flexBasicInfoCourseDetails"}>

                        <span className={"material-symbols-outlined allIconsBGCourseDetails"} style={{color: "rgb(89 159 55)"}}>
                            attach_money
                        </span>

                        <div>
                            <p>Price</p>
                            <h3>{courseDetails.price}</h3>
                        </div>

                    </div>

                    {/*duration section*/}
                    <div className={"flexBasicInfoCourseDetails"}>

                        <span className={"material-symbols-outlined allIconsBGCourseDetails"} style={{color: "#a99494"}}>
                            share_eta
                        </span>

                        <div>
                            <p>Duration</p>
                            <h3>{courseDetails.duration}</h3>
                        </div>

                    </div>
                   
                </div>
                {/*startLearningBtn*/}
                <button className={"startLearningBtnCourseDetails"} type="button" onClick={()=> {toast.info("Start learning will be available soon.")}}>Start learning</button>
            
            </div>
           
            {/*description section*/}
            <div className={"descriptionContainerCourseDetails"}>

                <h3>Description</h3>
                <p>{courseDetails.description}</p>

            </div>

            {/*footer section*/}
            <div className={"footerContainerCourseDetails"}>

                <h3 className={"footerTitleCourseDetails"}>Course information</h3>

                <div className={"footerInfoCourseDetails"}>

                    {/*lessons number*/}
                    <div className={"footerLessonNumCourseDetails"}>

                        <span className={"material-symbols-outlined allIconsBGCourseDetails"} style={{color: "rgb(78, 92, 223)"}}>
                            school
                        </span>

                        <div>
                            <p>Lessons:</p>
                            <h3>{courseDetails.lessons}</h3>
                        </div>

                    </div>

                    {/*language*/}
                    <div className={"footerLanguageCourseDetails"}>

                        <span className={"material-symbols-outlined allIconsBGCourseDetails"} style={{color: "rgb(55, 134, 16)"}}>
                            group
                        </span>

                        <div>
                            <p>Language:</p>
                            <h3>{courseDetails.language}</h3>
                        </div>

                    </div>

                    {/*students number*/}
                    <div className={"footerStudentsNumCourseDetails"}>

                        <span className={"material-symbols-outlined allIconsBGCourseDetails"} style={{color: "rgb(139, 62, 202)"}}>
                            language
                        </span>

                        <div>
                            <p>Students:</p>
                            <h3>{courseDetails.students}</h3>
                        </div>

                    </div>

                </div>

            </div>
           
        </div>
        
    );
}
