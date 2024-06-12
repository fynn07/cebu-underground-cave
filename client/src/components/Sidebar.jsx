import SideStatistic from "./ui/sideStatistic"

const Sidebar = () => {
    return (
        <div className="flex-1 flex flex-col justify-around items-center py-4 border-r-2 border-linegrey">
            <SideStatistic name={"General"} threads={0} />
            <SideStatistic name={"Music"} threads={0} />
            <SideStatistic name={"Fashion"} threads={0} />
            <SideStatistic name={"Art"} threads={0} />
            <SideStatistic name={"Literature"} threads={0} />
            <SideStatistic name={"Love/Lust"} threads={0} />
            <SideStatistic name={"Video Games"} threads={0} />
        </div>
    )
}

export default Sidebar
