/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Card = ({course,handleBuyCourse}) => {
    const {courseName, credit, img, description, price}=course
    
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title items-center">{courseName}</h2>
    <p>{description}</p>

    <div className="flex justify-evenly">
    <p className="font-bold text-xl mt-2 mb-4"><i class="fa-solid fa-dollar-sign"></i> Price: {price} BDT</p>
    <p className="font-bold text-xl mt-2 mb-4"><i class="fa-solid fa-book-open"></i> Credit: {credit}hr</p>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleBuyCourse(course)} className="btn btn-primary w-full">Select</button>
    </div>
    <hr />
   
  </div>
</div>
    );
};



export default Card;