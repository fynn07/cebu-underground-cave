
const Navbar = () => {
    return(
        <div>
            <div className="flex justify-between items-center border-b-2 border-b-linegrey pb-3">
                <div className="flex items-center pl-3 gap-4">
                    <img className="w-9" src="/assets/logo.png" alt="" />
                    <h1 className="text-white font-inrisans text-3xl">Cebu Underground Cave</h1>
                </div>
                <div className="pr-6 flex items-center gap-12">
                    <div>
                        <button className="text-white font-inrisans flex items-center gap-2">
                            Log in
                             <img className="w-4 pt-1" src="/assets/login_symbol.png" alt="login image" />
                        </button>
                    </div>
                    <button className="text-black bg-white py-1 px-3 font-inrisans rounded">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar