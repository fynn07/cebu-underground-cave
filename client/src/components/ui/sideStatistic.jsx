const SideStatistic = (props) => {
    return (
        <div className="w-10/12 flex flex-col items-center border-b pb-4  border-subline">
            <h2 className="font-inrisans text-white text-xl">{props.name}</h2>
            <p className="font-inrisans text-subtext text-sm">{props.threads} Threads</p>
        </div>
    )
}

export default SideStatistic;