import { customProfilePicture } from "../../utils/customProfilePicture";
import { formatDate } from "../../utils/formatDate";
const PostComment = (props) => {
    return (
        <div className="px-8 my-4 border-l-2 border-gray-400">
            <div className="flex gap-2">
                <img className="w-8 h-8 rounded-full" src={customProfilePicture(props.profilePicture)} alt="" />
                <div className="flex flex-col">
                    <p className="font-inrisans text-subtext text-xs">{formatDate(props.date)}</p>
                    <p className="font-inrisans text-nametext text-sm">{props.displayName}</p>
                </div>
            </div>
            <p className="text-gray-200 text-lg font-inrisans mt-1">{props.content}</p>
            <div className="flex gap-3 pt-3 items-center">
                <button className="bg-button_color text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl">
                    <img className="w-3 h-3" src="/assets/like_post.png" alt="" />
                    {props.upvotes}
                </button>
            </div>
        </div>
    )
}

export default PostComment;