const FlavorText = (props) => {
    return (
        <div className="flex flex-col gap-2 border-b border-linegrey pb-4 mb-4 pt-3">
            <p className="text-white font-inrisans text-2xl pl-3">{props.header}</p>
            <p className="text-center text-gray-300 font-inrisans">{props.subtext}
            </p>
        </div>
    )
}

export default FlavorText;