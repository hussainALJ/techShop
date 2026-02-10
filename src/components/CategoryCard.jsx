function CategoryCard({ categoryObj }) {
  return (
    <div
      className=" w-full h-112 bg-center bg-cover p-4 rounded-xl "
      style={{
        backgroundImage: `radial-gradient(transparent ,#00000088 50% ,black 120%), url(${categoryObj.image})`,
      }}
    >
      <p className=" text-gray-400 text-sm ">Category:</p>
      <h2 className=" pl-4 mt-2 text-white text-xl font-bold ">{categoryObj.name}</h2>
    </div>
  );
}

export default CategoryCard;
