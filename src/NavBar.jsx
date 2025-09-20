import {Link} from 'react-router-dom'
import { House } from 'lucide-react';
const NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border-2 border-gray-950 w-full">
            <h1 className="font-bold">BlogVerse</h1>
            <div className="relative">
            <Link to="/" className="text-gray-700 hover:bg-blue-200 px-5 py-2 rounded-lg cursor-pointer">Home</Link>
             <House className="absolute top-1 px-1 pl-1"/>
            </div>
            <div className="flex gap-5">
                <Link to="/signin" className="font-semibold text-gray-700">Sign In</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar