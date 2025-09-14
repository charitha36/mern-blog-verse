import React from "react"
const SignUp =() =>{
    return(
        <div className="flex justify-center flex-col items-center mt-10 gap-5">
            <h1 className="font-bold text-2xl text-blue-600">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create yout account and<br></br>start your Blogging Journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text" placeholder="Enter your Full Name" 
                    className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500" 
                    
                    ></input>
                </div>
                 <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="Email" placeholder="Enter your Email" 
                    className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500" 
                    
                    ></input>
                </div>
                 <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="Password" placeholder="Enter your Password" 
                    className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500" 
                    
                    ></input>
                </div>
                 <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <input type="Password" placeholder="Confirm your Password" 
                    className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500" 
                    
                    ></input>
                    
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className='h-5 w-5' />
                    <p>
                        I agree to the Terms of Service and Privacy Policy
                    </p>
                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white font-semibold rounded-xl">
                    Create Account
                </button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold">Already have an account?<span className="text-purple-500">Sign In Here</span></p>
                <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer">Back to Home</button>
            </form>
        </div>
    )
}

export default SignUp