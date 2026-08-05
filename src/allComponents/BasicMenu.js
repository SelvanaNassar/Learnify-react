// Styles
import "../allComponentsCSS/basicMenuComponent.css"

// React
import { useContext, useEffect, useState } from "react";

// Context
import AuthContext from "../authContext/AuthContext";

// React Router
import { useNavigate } from "react-router-dom";

// Notification Toastify library 
import {toast} from "react-toastify";

export default function BasicMenu () {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    //state for category filter
    const [selectedCategory, setSelectedCategory] = useState("All");

    //fetching data from Database 
    useEffect(()=>{
        fetch("/courses.json")
            .then((response)=>{return response.json()})
            //we put the course data in a state to show it at courses section
            .then((data)=>{ setCourses(data.courses);
                setLoading(false)})
            .catch((error)=>{setError("Something went wrong while fetching data from the server."); 
                            setLoading(false);}); 
        },[]);
    
    //Filter courses by search term and category and making search term insensitive
    const filteredCourses = courses.filter((course)=>{
        const matchedSearch =course.title.toLowerCase().includes(searchTerm.toLowerCase())
        //if "All" show all courses, otherwise show courses that match the selected category
        const matchedCategory = selectedCategory === "All" || course.category === selectedCategory;
        //return coursesthat match  search term and selected category
        return matchedSearch && matchedCategory 
    })

    //getting user data from context
    const {user}= useContext(AuthContext);

    //handling loading and error states
    if(loading){
        return(
            <h1>Loading...</h1>
        );
    }
    if(error){
        return(
            <h1>{error}</h1>
        );
    }

    return (
        /*parent div of component*/
        <div className = {"divContainerBasicMenu"}>

           {/*header of the page*/}
            <div className={"headerContainerBasicMenu"}>

                {/*search and filter btns*/}
                <div className={"headerSearchSectionBasicMenu"}>
                    <span className={"material-symbols-outlined"}>
                        search
                    </span>

                    {/*search input, makeing value=what the user want*/}
                    <input className={"searchBtnBasicMenu"}  
                           type = "search" 
                           placeholder = "Search for courses..."
                           value={searchTerm} 
                           onChange={(e)=>{setSearchTerm(e.target.value)}} 
                    />
                </div>

                {/*notification and avatar section*/}
                <div className={"avatarNotificationBasicMenu"}>

                    <button className={"notificationBtnBasicMenu"} 
                            type="button" 
                            onClick={()=> {toast.info("Notification will be available soon.")}}
                    >
                        <span className={"material-symbols-outlined"}>
                            notifications
                        </span>
                    </button>

                    <img src="avatar.jpg" alt = "Avatar" className={"avatarBasicMenu"}></img>

                    <p>{user.userName}</p>
                </div>
                
            </div>

            <div className={"welcomeMessageFilterBasicMenu"}>

                {/*welcome message*/}
                <div>
                    <h2>Hello {user.userName}!</h2>
                    <p>What would you like to learn today?</p>
                </div>

                {/*category filter, makeing value=what user want to filter*/}
                <div className={"filterSelectDivContainerBasicMenu"} >

                    <span className={"material-symbols-outlined"}>
                        filter_list
                    </span>

                    <select className={"filterSelectBasicMenu"}  
                        value={selectedCategory} 
                        onChange={(e)=>{setSelectedCategory(e.target.value)}}
                    >
                        <option value="All">All</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                    </select>

                </div>
                
            </div>

            {/*courses details container(general information)*/}
            <div className={"divContainerCoursesDetailsBasicMenu"}>

                <div className={"coursesDetailsBasicMenu"}>
                    <span className={"material-symbols-outlined allIconsBGBasicMenu"}>
                        assignment
                    </span>

                    <div>
                        <h1>12</h1>
                        <h5>Total courses</h5>
                    </div>

                </div>

                <div className={"coursesDetailsBasicMenu"}>

                    <span className={"material-symbols-outlined allIconsBGBasicMenu"}>
                        beenhere
                    </span>

                    <div>
                        <h1>5</h1>
                        <h5>Completed courses</h5>
                    </div>

                </div>

                <div className={"coursesDetailsBasicMenu"}>

                    <span className={"material-symbols-outlined allIconsBGBasicMenu"}>
                        play_lesson
                    </span>

                    <div>
                        <h1>7</h1>
                        <h5>Learning</h5>
                    </div>

                </div>

                <div className={"coursesDetailsBasicMenu"}>

                    <span className={"material-symbols-outlined allIconsBGBasicMenu"}>
                        alarm
                    </span>

                    <div>
                        <h1>23</h1>
                        <h5>Total hours</h5>
                    </div>

                </div>

            </div>

            <div className={"labelOurCoursesBasicMenu"}>

                <h5>Popular courses</h5>

                <button className="viewAllBtnBasicMenu" 
                        type="button" 
                        onClick={()=> {toast.info("View all button will be available soon.")}}
                >       View all
                </button>

            </div>
            
            {/*view existing courses section*/}

            <div className={"ourCoursesBasicMenu"}>

                {/*using map to iterate over the courses array, searching="" then show all courses*/}
                {filteredCourses.map((course) =>(

                    /*give a key=id to each course*/
                    <div className={"courseCardDivContainerBasicMenu"} key={course.id} onClick={()=>{navigate(`/course/${course.id}`)}}>
                       
                        <div>
                            <img className={"imgCoursesCardsBasicMenu"} src = {course.photo}  alt = {course.title}/>
                        </div>
                        
                        <div className={"coursesInfoDivContainerBasicMenu"}>

                                <h5>{course.title}</h5>

                                <div className={"courseTeacherBasicMenu"}>

                                    <span className={"material-symbols-outlined allIconsBGBasicMenu"}>
                                        person
                                    </span>

                                    <p>{course.teacher}</p>

                                </div>

                                <div className={"courseLevelPriceBasicMenu"}>

                                    <p className={"levelBasicMenu"}>{course.level}</p>

                                    <h5 className={"PriceBasicMenu"}>{course.price}</h5>

                                </div>
                        </div>
                    </div>))}
            </div>
        </div>
        
    );
}