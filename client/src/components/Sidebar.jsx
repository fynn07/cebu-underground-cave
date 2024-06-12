const Sidebar = () => {
    return (
        <div className="flex-1 flex flex-col justify-around items-center py-4 border-r-2 border-linegrey">
            <div className="w-10/12 flex flex-col items-center border-b pb-4  border-subline">
                <h2 className="font-inrisans text-white text-xl">General</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
            <div className="w-10/12 flex flex-col items-center border-b pb-4 border-subline">
                <h2 className="font-inrisans text-white text-xl">Music</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
            <div className="w-10/12 flex flex-col items-center border-b pb-4 border-subline">
                <h2 className="font-inrisans text-white text-xl">Fashion</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
            <div className="w-10/12 flex flex-col items-center border-b pb-4 border-subline">
                <h2 className="font-inrisans text-white text-xl">Art</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
            <div className="w-10/12 flex flex-col items-center border-b pb-4 border-subline">
                <h2 className="font-inrisans text-white text-xl">Literature</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
            <div className="w-10/12 flex flex-col items-center border-b pb-4 border-subline">
                <h2 className="font-inrisans text-white text-xl">Love/Lust</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
            <div className="w-10/12 flex flex-col items-center pb-4 border-subline">
                <h2 className="font-inrisans text-white text-xl">Video Games</h2>
                <p className="font-inrisans text-subtext text-sm">0 Threads</p>
            </div>
        </div>
    )
}

export default Sidebar
