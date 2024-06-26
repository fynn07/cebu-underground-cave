import { customProfilePicture } from '../../utils/customProfilePicture';
import { formatDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import LikeButton from './likeButton';

const PostContent = (props) => {

    //Put into props if user has liked the post, this will change the like button

    const content = (
        <div>
            <div className="flex gap-2">
                <img className="w-10 h-10 rounded-full" src={customProfilePicture(props.profilePicture)} alt="" />
                <div className="flex flex-col">
                    <p className="font-inrisans text-subtext text-xs">{formatDate(props.date)}</p>
                    <p className="font-inrisans text-nametext text-sm">{props.displayname}</p>
                </div>
            </div>
            <p className="text-white font-inrisans text-2xl">{props.title}</p>
            <img className='px-2 rounded-xl' src={props.image} alt="" />
            <p className="text-subtext font-inrisans mt-1">{props.content}</p>
            <div className="flex gap-3 pt-3 items-center">
                <LikeButton upvotes={props.upvotes} hasLiked={props.hasLiked} postID={props.postID}/>
                <button className="bg-button_color text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl">
                    <img className="w-4 h-3" src="/assets/comment_icon.png" alt="" />
                    {props.commentcount}
                </button>
            </div>
        </div>
    );

    return props.isclicked ? (
        <div to={`/${props.postID}`} className="flex flex-col gap-2 py-6 pl-2 rounded-xl">
            {content}
        </div>
    ) : (
        <Link to={`/${props.postID}`} className="flex flex-col gap-2 py-6 border-b border-subline hover:bg-highlight hover:cursor-pointer pl-2 rounded-xl">
            {content}
        </Link>
    );
};

export default PostContent;
