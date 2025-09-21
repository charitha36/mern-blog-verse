import React from "react"
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react'
const SignIn = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const handlePassword = () => {
        setshowPassword((password) => !password)
    }
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.email) {
            newErrors.email = "please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your password"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setSuccess("Your account is created successfully");
            setformData({
                email: "",
                password: ""
            })
        }
        const handleChange = (event) => {
            setErrors("")
            setSuccess("")
            {
                setformData((formData) => ({
                    ...formData,
                    [event.target.name]: event.target.value

                }))
            }
            setErrors((errors) => ({
                ...errors,
                [event.target.name]: ""

            }))
        }
    }

    return (
        <div className=" flex flex-col  justify-center items-center gap-6 bg-sky-50">
            <NavBar />
            <div className="flex flex-col  rounded-xl sm:w-[90%] md:w-[90%] justify-center border-1 border-white sm:px-1 md:px-1 sm:py-10 md:py-10 gap-5  mt-3 h-[700px] items-center ">

                <h1 className="font-bold text-2xl">SignIn</h1>
                <p className="text-gray-700">Access your account</p>
                <form className="flex flex-col sm:px-5 sm:py-10  md:px-5 md:py-10 xl:px-5 xl:py-15 gap-7 justify-center  bg-white rounded-xl mt-3  lg:w-1/2">

                    <div className="w-full flex flex-col gap-5">
                        <p className="font-semibold text-gray-700">Email Address</p>
                        <div className="relative">
                            <input name="email" type="Email" placeholder="sample@gmail.com"
                                className="border-1 border-black w-full py-4 px-3 rounded-xl pl-10" />
                            <Mail className="absolute top-4 left-3 text-gray-800" />
                        </div>

                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <p className="font-semibold text-gray-700 ">Password</p>
                        <div className="relative">
                            <input name="password" type={showPassword ? "password" : "text"} placeholder="sample123"
                                className="border-1 border-black w-full py-4 px-1 rounded-xl pl-10" />
                            <LockKeyhole className="absolute top-4 left-3 text-gray-800" />
                            <p onClick={handlePassword}>{showPassword ? <Eye className="absolute bottom-3  right-5 text-gray-500" /> : <EyeOff className="absolute bottom-4  right-3 text-gray-500" />}</p>


                        </div>
                    </div>
                    <div className="flex justify-around w-full">
                        <div className="w-full flex ">
                            <input type="checkbox" className="h-4 w-4" />
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
                        <Link to="/signup" className="font-semibold text-blue-500 hover:text-blue-800 cursor-pointer " >Create one here</Link>
                    </div>
                </form>

            </div>
        </div>


    )
}
export default SignIn