const CommentInput = () => {
    return (
        <form className="px-2 pb-6 border-b border-subline" action="" method="post">
            <input className="w-full h-10 p-4 rounded-xl bg-linegrey text-subtext focus:text-white focus:outline-select_highlight" 
            placeholder="Add a Comment" type="text" name="" id=""/>
        </form>
    )
}

export default CommentInput;