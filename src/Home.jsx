import NavBar from './NavBar.jsx'
function Home() {
    const posts = [{
        id: 1,
        title: "Getting started with react and Tailwind CSS",
        author: "Prem Sagar",
        timeRead: " 5 min read",
        postedOn: "Jan 10, 2024",
        content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        title: "Understanding JavaScript Closures",
        author: "Asha Deepthi",
        timeRead: " 7 min read",
        postedOn: "Dec 05, 2023",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 3,
        title: "A Guide to Responsive Web Design",
        author: "Alekhya Rani",
        timeRead: " 6 min read",
        postedOn: "Nov 20, 2023",
        content: "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 4,
        title: "Exploring the New Features of ES2021",
        author: "Sravanthi",
        timeRead: " 8 min read",
        postedOn: "Oct 01, 2023",
        content: "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 5,
        title: "Mastering Flexbox for Layout Design",
        author: "Leela Avinash",
        timeRead: " 10 min read",
        postedOn: "Sep 15, 2023",
        content: "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 6,
        title: "Introduction to TypeScript for JavaScript Developers",
        author: "Charan Teja",
        timeRead: " 9 min read",
        postedOn: "Aug 10, 2023",
        content: "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }]
    return (
        <div className="bg-sky-50">
            <NavBar/>
            <h1 className="font-bold text-4xl flex justify-center mt-5">Welcome to BlogVerse</h1>
            <p className="text-gray-700 flex justify-center mt-5 text-xl">Discover amazing stories, insights, and ideas from our community of <br />writers.Sign In to create your own posts and save your favorites.</p>
            <div className="flex-wrap gap-10 ml-40 mr-40 flex items-center justify-center ">
                {
                    posts.map((post) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg " key={post.id}>
                            <div className="relative">
                                <img className=" rounded-t-lg  shadow-lg h-52 w-96 " src={post.Image} alt="Writing"></img>
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3" >Save</button>
                                
                                <button className="p-3 text-sm text-white bg-blue-700 rounded-2xl py-1 absolute cursor-pointer left-4 top-3" >Technology</button>
                                
                                <div className="flex gap-5 mt-3 px-2">
                                     <img className="rounded-full shadow-lg h-12 w-12 " src={post.profilePic} alt="Writing" />
                                </div>
                                  <div>
                                    <p className="font-semibold flex ml-5">{post.author}</p>
                                    <p className="text-gray-500 ml-5">{post.postedOn} - {post.timeRead}</p>
                                </div>

                            </div>
                            <div>
                                <p className="font-semibold hover:text-blue-600 cursor-pointer text-xl ml-5">{post.title}</p>
                            </div>
                            <div className="mt-4">
                            <p className="text-gray-700 ml-5">{post.content}</p>
                            </div>
                            <div className="border-[0.5px] border-gray-300 w-[90%] mt-4 ml-5"></div>
                            <div className="mt-15 ml-5">{post.timeRead}
                            <button className="text-blue-500 hover:text-blue-800 cursor-pointer flex justify-end w-full mb-10">Read more</button>
                        </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Home