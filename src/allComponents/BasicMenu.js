import "../allComponentsCSS/basicMenuComponent.css"
import { useContext, useEffect } from "react";
import AuthContext from "../authContext/AuthContext";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify";

export default function BasicMenu () {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    //state for and loading 
    const [loading, setLoading] = useState(true);
    //state for courses data 
    const [courses, setCourses] = useState([]);
    //fetching data from the server 
    useEffect(()=>{fetch("http://localhost:3001/courses")
                    .then((response)=>{return response.json()})
                    //we put the course data in a state to show it at courses section
                    .then((data)=>{ setCourses(data);
                                    setLoading(false)})
                    .catch((error)=>{setError("Something went wrong while fetching data from the server."); 
                                    setLoading(false);}); },[]);
    //state for the search input
    const [searchTerm, setSearchTerm] = useState("");
    //state for the category filter
    const [selectedCategory, setSelectedCategory] = useState("All");
    //filtering the courses based on the search term and filtered category and making the search term lowercase to make it case insensitive
    const filteredCourses = courses.filter((course)=>{const matchedSearch =course.title.toLowerCase().includes(searchTerm.toLowerCase())
                                                      //if the selected category is "All" then we will show all the courses, otherwise we will show the courses that match the selected category
                                                      const matchedCategory = selectedCategory === "All" || course.category === selectedCategory;
                                                      //returning the courses that match the search term and the selected category
                                                      return matchedSearch && matchedCategory })
    //state for error handling 
    //getting the user data from the context
    const {user}= useContext(AuthContext);
    //handling the loading and error states
    if(loading){
        return(
            <h1>Loading....</h1>
        );
    }
    if(error){
        return(
            <h1>{error}</h1>
        );
    }
    return (
        /*the parent div of all the component*/
        <div className = {"divContainerBasicMenu"}>
           {/*the header of the page*/}
            <div className={"headerContainerBasicMenu"}>
                {/*search and filter btns*/}
                <div className={"headerSearchSectionBasicMenu"}>
                    <span className={"material-symbols-outlined"}>
                        search
                    </span>
                    {/*the search input, we make the value=what the user want to search, onchane: when the user types in the input*/}
                    <input className={"searchBtnBasicMenu"}  type = "search" placeholder = "Search for courses..."
                            value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
                    {/*end of the search input, we make the value=what the user want to search, onchane: when the user types in the input*/}
                </div>   
                
                
                {/*end of search and filter btns*/}
                
                {/*notification and avatar section*/}
                <div className={"avatarNotificationBasicMenu"}>
                    <button className={"notificationBtnBasicMenu"} type="button" onClick={()=> {toast.info("Notification will be available soon.")}}>
                        <span className={"material-symbols-outlined"}>
                            notifications
                        </span>
                    </button>
                    <img src="avatar.jpg" alt = "Avatar" className={"avatarBasicMenu"}></img>
                    <p>{user.userName}</p>
                </div>
                {/*end of notification and avatar section*/}
            </div>
            {/*end of the header of the page*/}

            <div className={"welcomeMessageFilterBasicMenu"}>
                {/*the welcome message*/}
                <div>
                    <h2>Hello {user.userName}!</h2>
                    <p>What would you like to learn today?</p>
                </div>
                {/*end of the welcome message*/}

                {/*the category filter, we make the value=what the user want to filter, onchane: when the user select a category*/}
                <div className={"filterSelectDivContainerBasicMenu"} >
                <span className={"material-symbols-outlined"}>
                    filter_list
                </span>
                <select className={"filterSelectBasicMenu"}  value={selectedCategory} onChange={(e)=>{setSelectedCategory(e.target.value)}}>
                    <option value="All">All</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                </div>
                {/*end of the category filter, we make the value=what the user want to filter, onchane: when the user select a category*/}
            </div>

            {/*the courses details container(general information about all courses numbers)*/}
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
                        <h5>Complated courses</h5>
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
                        <h5>Total houres</h5>
                    </div>
                </div>
            </div>
            {/*end of the courses details container(general information about all courses numbers)*/}
            <div className={"labelOurCoursesBasicMenu"}>
                <h5>Popular courses</h5>
                <button className="viewAllBtnBasicMenu" type="button" onClick={()=> {toast.info("View all button will be available soon.")}}>View all</button>
            </div>
            {/*view the existing courses section*/}
            <div className={"ourCoursesBasicMenu"}>
                {/*using map to iterate over the courses array, when searching="" then will show all courses, when user search for somthing then will show the course related only*/}
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
            {/*end of view the existing courses section*/}
        </div>
        /*end of the parent div of all the component*/
        
    );
}