const FilterContentSection = (props) => {
    const handleGenreChange = (event) => {
        props.setGenre(event.target.value);
    };

    const handleFilterChange = (event) => {
        props.setFilter(event.target.value);
    };

    return (
        <div className="flex gap-8 border-b border-subline pb-3">
            <select
                className="bg-transparent text-sm text-subtext font-inrisans"
                value={props.filter}
                onChange={handleFilterChange}
            >
                <option value='Newest'>New</option>
                <option value='Test'>Test</option>
                <option value='Best'>Best</option>
            </select>
            <select
                className="bg-transparent text-sm text-subtext font-inrisans text-center"
                value={props.genre}
                onChange={handleGenreChange}
            >
                <option value='All'>All Threads</option>
                <option value='General'>General</option>
                <option value='Music'>Music</option>
                <option value='Fashion'>Fashion</option>
                <option value='Art'>Art</option>
                <option value='Literature'>Literature</option>
                <option value='Love/Lust'>Love/Lust</option>
                <option value='Video Games'>Games</option>
            </select>
        </div>
    );
};

export default FilterContentSection;
