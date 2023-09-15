/* eslint-disable react/prop-types */


const Cart = ({course}) => {
    // console.log(course)
    return (
        <div className="w-96 ml-12 border black  h-[550px] rounded-xl shadow-2xl ">
             <h1 className="text-xl text-blue-500 font-bold mt-4 mb-8 text-center">Credit Hour Remaining  hr</h1> 
             <hr className=""/>
             <h4 className="text-black font-bold ml-6 text-xl mt-4">Course Name {course.length}</h4>
             <div className="ml-4 mt-6">
                {
                    course.map(crs=><li
                    key={crs.id}
                    >
                        {crs.courseName}
                    </li>)
                }
             </div>
        </div>
    );
};

export default Cart;