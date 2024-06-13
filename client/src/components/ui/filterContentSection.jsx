const FilterContentSection = (props) => {
    const handleChange = (event) => {
        props.setFilter(event.target.value);
    };

    return (
        <div className="flex gap-10 border-b border-subline pb-3">
            <button className="font-inrisans text-subtext text-sm">Music V</button>
            <select
                className="bg-transparent text-sm text-subtext font-inrisans"
                value={props.filter}
                onChange={handleChange}
            >
                <option value='Newest'>New</option>
                <option value='Test'>Test</option>
                <option value='Best'>Best</option>
            </select>
        </div>
    );
};

export default FilterContentSection;
