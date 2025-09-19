import React from "react"
const SignIn = () => {
    return (
        <div className=" flex flex-col  justify-center items-center mt-25 gap-6 ">
            <div className="flex flex-col  border-1 border-white rounded-xl  bg-sky-50 w-[25%] justify-center px-1 py-10 gap-5  mt-3 h-[700px] items-center">

                <h1 className="font-bold text-2xl">SignIn</h1>
                <p className="text-gray-700">Access your account</p>
                <form className="flex flex-col px-5 py-10 gap-7 justify-center mt-3 w-full">

                    <div className="w-full flex flex-col gap-5">
                        <p className="font-semibold text-gray-700">Email Address</p>
                        <input type="Email" placeholder="sample@gmail.com"
                            className="border-1 border-black w-full py-4 px-3 rounded-xl"></input>

                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <p className="font-semibold text-gray-700 ">Password</p>
                        <input type="Password" placeholder="sample123"
                            className="border-1 border-black w-full py-4 px-1 rounded-xl"></input>
                    </div>
                    <div className="flex justify-around w-full">
                        <div className="w-full flex ">
                            <input type="checkbox" className="h-4 w-4"></input>
                            <p>Remember me</p>

                        </div>
                        <div className="w-full flex justify-around">

                            <button className=" text-blue-500 font-semibold cursor-pointer hover:text-blue-700">Forgot password?</button>

                        </div>
                    </div>
                    <div className=" flex w-full justify-center border-[0.5px] bg-blue-600 rounded-xl">
                        <button className="text-white font-semibold border-1 hover:bg-blue-700 w-[100%] py-3 cursor-pointer rounded-xl">SignIn</button>
                    </div>
                    <div className="border-[0.5px] border-gray-300 mt-4 w-full">
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-700 flex items-center">Don't have an account?</p>
                        <button className="font-semibold text-blue-500 hover:text-blue-800 cursor-pointer " >Create one here</button>
                    </div>
                </form>

            </div>
        </div>


    )
}
export default SignIn