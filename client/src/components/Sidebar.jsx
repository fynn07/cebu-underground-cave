import SideStatistic from "./ui/sideStatistic";
import { useGenreCount } from "../hooks/useGenreCount";

const Sidebar = () => {
    const {genres, genreCounts} = useGenreCount();

    return (
        <div className="flex-1 hidden flex-col justify-around items-center py-4 border-r-2 border-linegrey md:hidden lg:flex xl:flex 2xl:flex ">
            {genres.map(genre => (
                <SideStatistic key={genre} name={genre} threads={genreCounts[genre] || 0} />
            ))}
        </div>
    );
};

export default Sidebar;
