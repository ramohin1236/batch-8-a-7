import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../cart/Cart";

import Swal from 'sweetalert2'


const Home = () => {

    const [courses, setCourses]=useState([])

    const [course,setCourse]=useState([])

    useState(()=>{
        fetch('../../../public/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);


    const handleBuyCourse= (courses)=>{
        const isExist= course.find(item=>item.id === courses.id);
        if(isExist){
            Swal.fire('You cannot buy this code for 2 times!')
        }
        else{
            const newCourse= [...course,courses]
        setCourse(newCourse)
        }
        // console.log(newCourse)
    }


    return (
        <div className="flex w-11/12 ">
        
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 ml-10 mt-10">
            {
             courses.map(course=><Card
             key={course.id}
             course={course}
             handleBuyCourse={handleBuyCourse}
             ></Card>)
            }
        </div>

        <div>
            <Cart
            course={course}
            ></Cart>
        </div>
        </div>
    );
};

export default Home;