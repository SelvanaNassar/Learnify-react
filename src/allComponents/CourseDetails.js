import "../allComponentsCSS/courseDetails.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

export default function CourseDetails(){ 
    const navigate = useNavigate();
    const {id} = useParams();
    const [courseDetails, setCourseDetails] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3001/courses/${id}`)
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Course not found.");
                }
                return response.json()
            })
            .then((data)=>{
                setCourseDetails(data);
                setLoading(false);
            })
            .catch(()=>{
                setError("Something went wrong while loading the course.");
                setLoading(false);
            });
            //we put the array to avoid the fetch from running in every re-rendering, so now it will work when id change only
    }, [id])     
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }                  
    return(
        /*the Div parent that contains all properties*/
        <div className={"ParentDivcourseDetails"} >
            {/*the back button tag that make the user back one step, we used navigate(-1) to back one step to the last page*/}
            <button className={"BackBtnCourseDetails"} onClick={()=>{navigate(-1)}}>
                {/*icon side*/}
                <span className={"material-symbols-outlined"}>
                    arrow_back
                </span> 
                {/*end of icon side*/}
                <span>Back</span>
            </button>
            {/*end of the back button tag that make the user back one step, we used navigate(-1) to back one step to the last page*/}

            {/*the div that hold all basic course information(course photo, title, level, teacher, category) and start learning button*/}
            <div className={"BasicInfoCourseDetails"}>
                <img src={courseDetails.photo} alt={courseDetails.title} className={"photoCourseDetails"}></img>
                <div>
                    <h2>{courseDetails.title}</h2>

                    {/*the level information of course*/}
                    <div className={"flexBasicInfoCourseDetails levelBasicInfoCourseDetails"}>
                        <span className={"material-symbols-outlined"} style={{color: "rgb(240, 174, 8)"}}>
                            kid_star
                        </span>
                        <h3>{courseDetails.level}</h3>
                    </div>
                    {/*end of the level information of course*/}

                    {/*the teacher information of course*/}
                    <div className={"flexBasicInfoCourseDetails"}>
                        {/*teacher icon*/}
                        <img src="/teacher.webp" alt="teacher" className={"teacherIconCourseDetails allIconsBGCourseDetails"}/>
                        {/*end of teacher icon*/}
                        <div>
                            <p>Teacher</p>
                            <h3>{courseDetails.teacher}</h3>
                        </div>
                    </div>
                    {/*end of the teacher information of course*/}

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
                    {/*end of category section*/}

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
                    {/*end of price section*/}

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
                    {/*end of duration section*/}
                </div>
                <button className={"startLearningBtnCourseDetails"} type="button" onClick={()=> {toast.info("Start learning will be available soon.")}}>Start learning</button>
            </div>
            {/*end of the div that hold all basic course information(course photo, title, level, teacher, category) and start learning button*/}

            {/*description section*/}
            <div className={"descriptionContainerCourseDetails"}>
                <h3>Description:</h3>
                <p>{courseDetails.description}</p>
            </div>
            {/*end of description section*/}

            {/*footer section that have information course(lessons num, language, students num)*/}
            <div className={"footerContainerCourseDetails"}>
                <h3 className={"footerTitleCourseDetails"}>Course information</h3>
                {/*footer information (lessons num, language, students num)*/}
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
                    {/*end of lessons number*/}
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
                    {/*end of language*/}
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
                    {/*end of students number*/}
                </div>
                {/*end of footer information (lessons num, language, students num)*/}
            </div>
            {/*end of footer section that have information course(lessons num, language, students num)*/}
        </div>
        /*end of the Div parent that contains all properties*/
    );
}
