import { useState } from "react";
import Card from "../Card/Card";


const Home = () => {

    const [courses, setCourses]=useState([])
    useState(()=>{
        fetch('../../../public/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
         <h1>courses: {courses.length}</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4">
            {
             courses.map(course=><Card
             key={course.id}
             course={course}
             ></Card>)
            }
        </div>
        </div>
    );
};

export default Home;