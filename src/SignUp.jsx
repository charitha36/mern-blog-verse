import React from "react"
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Mail } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react'
const SignUp = () => {

    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();

        let newErrors = {}

        if (!formData.fullName) {
            newErrors.fullName = "please enter your full name"
        }
        if (!formData.email) {
            newErrors.email = "please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "please enter your confirm password"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "your password and confirm password are different"
        }


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setSuccess("Your account is created successfully");
            setformData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""

            })
        }
        {/* if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Please fill all the fields")
        } else if (formData.password !== formData.confirmPassword) {
            setError("Your passwords did not match")
        } else {
            setSuccess("Your account is created successfully")
            setError("")
            setformData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""

            })*/}
        }
    const handlePassword = () => {
        setshowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setshowConfirmPassword((password) => !password)

    }
    const handleChange = (event) => {
        setError("")
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


        return (
            <div className="flex justify-center flex-col items-center bg-sky-50 gap-5">
                <NavBar />
                <h1 className="font-bold text-2xl text-blue-600">Join BlogVerse</h1>
                <p className="text-xl text-gray-600 text-center font-semibold">Create your account and<br></br>start your Blogging Journey today</p>
                <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black  w-[90%] sm:w-[50%] lg:w-1/3 py-7 items-center gap-5 rounded-xl bg-white">
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Full Name</p>
                        <div className="relative">
                            <input value={formData.fullName} onChange={handleChange} type="text" name="fullName" placeholder="Enter your Full Name"
                                className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500 pl-10"

                            />
                            <CircleUserRound className="absolute top-4 left-3 text-gray-800" />
                        </div>
                        {errors.fullName && <p className="text-red-700">{errors.fullName}</p>}
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Email</p>
                        <div className="relative">

                            <input
                                value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your Email"
                                className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500 pl-10"

                            />
                            <Mail className="absolute top-4 left-3 text-gray-800" />
                        </div>
                        {errors.email && <p className="text-red-700">{errors.email}</p>}


                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <div className="relative">
                            <input value={formData.password} onChange={handleChange} name="password" type={showPassword ? "password" : "text"} placeholder="Enter your Password"
                                className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500 pl-10"

                            />
                            <KeyRound className="absolute bottom-4  left-3 text-blue-500" />
                            <p onClick={handlePassword}>{showPassword ? <Eye className="absolute bottom-4  right-3 text-gray-500" /> : <EyeOff className="absolute bottom-4  right-3 text-gray-500" />}</p>
                        </div>
                        {errors.password && <p className="text-red-700">{errors.password}</p>}
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                        <div className="relative">
                            <input value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" type={showConfirmPassword ? "password" : "text"} placeholder="Confirm your Password"
                                className="border-1 border-gray-700 w-full items-center py-4 px-3 rounded-xl focus:outline-none focus:border-emerald-500 pl-10"

                            />
                            <KeyRound className="absolute bottom-4  left-3 text-blue-500" />
                            <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute bottom-4  right-3 text-gray-500" /> : <EyeOff className="absolute bottom-4  right-3 text-gray-500" />}</p>
                        </div>
                        {errors.confirmPassword && <p className="text-red-700">{errors.confirmPassword}</p>}
                    </div>
                    <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                        <input type="checkbox" name="" id="" className='h-5 w-5' />
                        <p>
                            I agree to the Terms of Service and Privacy Policy
                        </p>
                    </div>
                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    <button type="submit" className="w-[90%] bg-purple-500 py-4 text-white font-semibold rounded-xl flex justify-center cursor-pointer">
                        <CircleUser /> Create Account
                    </button>
                    <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                    <p className="text-gray-700 font-semibold">Already have an account?<Link to="/signin" className="text-purple-500">Sign In Here</Link></p>
                    <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer">Back to Home</button>
                </form>
            </div>
        )
    }

    export default SignUp