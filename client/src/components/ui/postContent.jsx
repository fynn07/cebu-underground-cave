import {formatDate} from '../../utils/formatDate'
import { Link } from 'react-router-dom';

const PostContent = (props) => {
    return (
        <Link to="/" className="flex flex-col gap-2 py-6 border-b border-subline hover:bg-highlight hover:cursor-pointer pl-2 rounded-xl">
            <div className="flex gap-2">
                <img className="w-10 h-10 rounded-full" src="/assets/test_profile.jpg" alt="" />
                <div className="flex flex-col">
                    <p className="font-inrisans text-subtext text-xs">{formatDate(props.date)}</p>
                    <p className="font-inrisans text-nametext text-sm">{props.displayname}</p>
                </div>
            </div>

            <p className="text-white font-inrisans text-2xl">{props.title}</p>
            <p className="text-subtext font-inrisans">{props.content}</p>

            <div className="flex gap-3 pt-3 items-center">
                <button className="bg-button_color text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl">
                    <img className="w-3 h-3" src="/assets/like_post.png" alt="" />
                    {props.upvotes}
                </button>
                <button className="bg-button_color text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl">
                    <img className="w-4 h-3" src="/assets/comment_icon.png" alt="" />
                    {props.commentcount}
                </button>
                <p className='text-subtext text-sm'>{props.genre}</p>
            </div>
        </Link>
    )
}

export default PostContent;