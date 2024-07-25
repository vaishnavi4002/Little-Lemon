import   heroImg from "../assets/images/heroImg.jpg"
import {Link} from 'react-router-dom';
const Hero = () => {
  return (

    <div className="bg-[rgb(73,94,87)]  lg:h-[25vw] w-full ">
        <div  className="flex flex-wrap justify-between ">
            <div className="w-full lg:w-1/2 ">
            <div className=" flex flex-col items-center lg:items-start ml-12 pl-10 py-5 ">
            <h1 className="  text-5xl lg:text-7xl  font-medium font-markazi text-[#f4cf14b8]">Little Lemon</h1>
              <h2 className="text-3xl lg:text-5xl text-white">Chicago</h2>
              <p className="text-white mt-5 text-center lg:text-start">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
             
              <button className="rounded-full bg-[#F4CE14] lg:px-5 py-3 my-6 text-base font-medium text-black transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
              <Link to="/booking" className="text-white">Reserve A Table</Link>
</button>
            </div >
              
            </div >
            
            <div className="  mt-10 flex justify-center w-full lg:w-1/2">
            <img className=" w-2/3 h-80  lg:w-2/5 lg:h-auto rounded-xl lg:rounded-3xl "src={heroImg} alt="hero-img" />
            </div>

        </div>
      

    </div>
  )
}

export default Hero
