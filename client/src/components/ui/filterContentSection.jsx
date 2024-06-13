const FilterContentSection = (props) => {
    return (
        <div className="flex gap-10 border-b border-subline pb-3">
            <button className="font-inrisans text-subtext text-sm">Music V</button>
            <button onClick={() => props.setFilter('Newest')} className="font-inrisans text-subtext text-sm">{props.filter} V</button>
        </div>
    )
}

export default FilterContentSection