const Shimmer = () => {
  return (
    <div className="restrauntList">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export const ShimmerRestaurant=()=>{
  return(
    <div className="restrauntList">
      <div className="shimmer-restaurant">

      </div>


    </div>
  )
}

export default Shimmer;
