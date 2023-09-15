/* eslint-disable react/prop-types */


const Cart = ({course,totalHour,remainingHour,totalPrice}) => {
    console.log(course)
    return (
        <div className="w-96 ml-12 border black  h-[550px] rounded-xl shadow-2xl ">
             <h1 className="text-xl text-blue-500 font-bold mt-4 mb-8 text-center">Credit Hour Remaining {remainingHour}  hr </h1> 
             <hr className=""/>
             <h4 className="text-black font-bold ml-6 text-xl mt-4">Course Name {course.length}</h4>
             <div className="ml-4 mt-6 mb-6">
                {
                    course.map(crs=><li
                    key={crs.id}
                    >
                        {crs.courseName}
                    </li>)
                }
             </div>
             <div>
                <hr />
        <p className="mt-10 ml-6 font-bold">Total Credit Hour: {totalHour}</p>
        <p className="mt-10 ml-6 font-bold">Total Price: {totalPrice} BDT</p>
    </div>
        </div>
    );
};

export default Cart;