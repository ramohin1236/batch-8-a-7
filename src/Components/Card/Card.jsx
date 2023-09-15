/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Card = ({course}) => {
    const {courseName, credit, img, description, price}=course
    console.log(course);
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title items-center">{courseName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
    );
};



export default Card;