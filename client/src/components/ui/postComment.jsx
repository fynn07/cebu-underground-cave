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
            <div className="flex gap-3 pt-4 items-center">
            </div>
        </div>
    )
}

export default PostComment;