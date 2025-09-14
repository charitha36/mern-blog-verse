const ProductCard=()=>{
    return(
        <div className="border-1 border-black w-[300px] flex flex-col items-center gap-10 pt-4 pb-4 py-4 rounded-2xl bg-blue-50">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-2 border-blue-600 rounded-full" />
            <div className="flex flex-col items-center gap-10">
            <h2 className="font-bold text-4xl text-red-500">Product 1</h2>
            <p className="text-xl text-center">This is a sample product</p>
            <p className="font-bold text-3xl text-cyan-600">$29.99</p>
            </div>
            <button className="bg-gray-400 text-white w-[90%] py-3 rounded-2xl cursor-pointer hover:bg-gray-600">Add to Cart</button>

        </div>
    
    )
}

export default ProductCard;