import { useState } from "react";
import Card from "../Card/Card";
import Cart from "../cart/Cart";

import Swal from 'sweetalert2'


const Home = () => {

    const [courses, setCourses]=useState([])

    const [course,setCourse]=useState([])
    const [totalHour, setTotalHour]=useState(0);
    const [remainingHour, setRemainingHour]=useState(20)
    const [totalPrice,setTotalPrice]= useState(0)

    useState(()=>{
        fetch('../../../public/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);


    const handleBuyCourse= (courses)=>{
        const isExist= course.find(item=>item.id === courses.id);
        let count= courses.credit;
        let price= courses.price;

        if(isExist){
            Swal.fire('You cannot buy this course for 2 times!')
        }
        else{
            course.forEach(time=>{
                count= count+ time.credit;
                console.log(count);
            })

            if(count> 20){
                return    Swal.fire('You cross your credit!')
            }
            course.forEach(p=>{
                 price= price+ p.price;
                console.log(price)
            }) 
          const totalRemain = 20-count;
          setRemainingHour(totalRemain)
            const newCourse= [...course,courses]
            setCourse(newCourse);
            setTotalHour(count)
            setTotalPrice(price)
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
            totalHour={totalHour}
            remainingHour={remainingHour}
            totalPrice={totalPrice}
            ></Cart>
        </div>
        </div>
    );
};

export default Home;