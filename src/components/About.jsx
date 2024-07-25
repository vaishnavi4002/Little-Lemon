

const About = () => {
  return (
    <div className="bg-[rgb(73,94,87)]  lg:h-[35vw] w-full  ">
    <div  className="flex flex-wrap justify-between items-center ">
        <div className="w-full lg:w-1/2 ">
        <div className=" flex flex-col items-center lg:items-start ml-12 pl-10 py-5 ">
        <h1 className="  text-5xl lg:text-7xl  font-medium font-markazi text-[#f4cf14b8]">Little Lemon</h1>
          <h2 className="text-3xl lg:text-5xl text-white">Chicago</h2>
          <p className="text-white mt-5 text-center lg:text-start">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
          </p>
         
        </div >
          
        </div >
        
        <div className=" flex justify-center w-full lg:w-1/2 p-10">
        <img className=" w-1/2   lg:w-2/5 lg:h-auto rounded-xl lg:rounded-3xl "src="https://sundayguardianlive.com/wp-content/uploads/2023/08/female-gaze-pic-1920x2905.jpg" alt="hero-img" />
        </div>
        
        

    </div>
  

</div>
  )
}

export default About
