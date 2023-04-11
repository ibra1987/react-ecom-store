const Hero = () => {
  return (
    <div className="w-11/12 mt-10 flex justify-between bg-indigo-600 items-center p-6 md:p-20 border">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl w-full text-center font-extrabold text-white">
          Prices That Will Blow Your Mind
        </h1>
        <p className="w-11/12 md:w-3/5 mx-auto p-4 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          alias voluptatibus veritatis animi sapiente reiciendis. Cupiditate
          minus quae porro excepturi?
        </p>
        <button className="px-4 bg-yellow-400 hover:bg-yellow-500  tracking-widest font-medium text-xl py-2">
          Start Browsing
        </button>
      </div>
      <div className=" hidden xl:flex relative justify-center items-center w-1/2 ">
        <div className="bg-white rounded-full w-60 h-60"></div>
        <img
          src={"/images/wow.png"}
          width={600}
          height={600}
          className="bg-transparent absolute z-10 right-0 p-0"
        />
      </div>
    </div>
  );
};

export default Hero;
