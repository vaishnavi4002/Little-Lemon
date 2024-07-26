
import logo from  "../assets/images/logo.jpg"
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
    
        <nav className=" mb-4 flex justify-between items-center py-6 ">
    <div className=" ml-10  flex flex-shrink-0 items-center">
      <img  className="w-40 h-15"   src={logo}  alt="logo" />
    </div>
    
    <ul className="flex justify-center items-center space-x-12 mr-20 text-xl">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/">Menu</Link>
        </li>
        <li>
        <Link to="/">Menu</Link>
        </li>
        <li>
        <Link to="/">Reservation</Link>
        </li>
        <li>
        <Link to="/">Order Online</Link>
        </li>
        <li>
        <Link to="/">Login</Link>
        </li>
      </ul>
  </nav>
    </div>
  )
}

export default Navbar
