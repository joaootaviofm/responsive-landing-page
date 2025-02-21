export default function Navbar(){
        


    return(
        <div className="sticky backdrop-blur-md bg-white/10 border-b border-white/20
 font-primary px-10 py-7 flex items-center justify-between">
            <div>
                <h1 href="#" className="hover:scale-110 transition-all cursor-pointer font-semibold text-3xl">PlayEX</h1>
            </div>
            <ul className="hidden font-bold md:flex px-5 py-3 gap-10  rounded-lg">
                <li>
                    <a href="#" className="hover:text-white duration-500 flex transition ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">Product</a>
                </li>
                <li>
                    <a href="#" className="hover:text-white flex items-center gap-1 transition duration-500 ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">
                        Services
                        <i className="bx bx-down-arrow"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white flex transition duration-500 ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-white flex transition duration-500 ease-in-out hover:bg-white/20 hover:border-white/20 border border-transparent rounded-md p-4">Resources</a>
                </li>
            </ul>
            <div className="hidden lg:flex">
                <button className="cursor-pointer text-3xl py-2 px-5 rounded-2xl hover:text-white duration-500 hover:bg-white/20 hover:border-white/20 border border-transparent">
                    Sign In
                </button>
            </div>
            <div className="md:hidden flex">
                <i className="bx bx-menu text-2xl"></i>
            </div>
        </div>
    )
}