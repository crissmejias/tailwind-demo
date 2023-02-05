import food from "./assets/food.jpeg";
function Card() {
  return (
    <div className="bg-white p-4 w-60 md:w-96 lg:w-1/3 flex md:gap-2 flex-col md:flex-row items-center rounded-xl">
      <div className="flex justify-center">
        <img src={food} alt="" className="h-30 md:h-32  rounded-lg" />
      </div>
      <div className=" rounded relative w-52 -mt-6 md:mt-0  md:w-56  p-2 shadow-xl bg-white">
        <h2 className="text-gray-900 text-xl tracking-tight font-semibold capitalize">
          Hamburguesa
        </h2>
        <p className=" text-gray-700 leading-snug">
          Hamburguesa con queso y chipotle
        </p>
        <div className="text-sm font-semibold text-gray-700">$15.00</div>
        <div className="text-yellow-700">★★★★☆/reviews</div>
      </div>
    </div>
  );
}
export { Card };
