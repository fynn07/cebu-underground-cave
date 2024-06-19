const UserBar = (props) => {
    return (
        <div className="flex gap-2 pt-4 items-center border-b border-subline pb-4">
            <img className="w-8 h-8 rounded-full" src="/assets/test_profile.jpg" alt="" />
            <p className="text-gray-200 ">{props.displayName}</p>
        </div>
    )
}

export default UserBar;