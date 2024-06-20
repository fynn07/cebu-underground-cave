import { useState } from "react";
import { likePost } from "../../services/api"
import Cookies from "js-cookie";

const LikeButton = (props) => {
    const [likes, setLikes] = useState(props.upvotes);
    const [color, setColor] = useState(props.hasLiked ? "bg-red-500" : "bg-button_color");

    const handleClick = async (event) => {
        event.preventDefault();

        if(Cookies.get('token')){
            if (props.hasLiked) {
                if (likes === props.upvotes) {
                    setLikes(likes - 1);
                } else {
                    setLikes(likes + 1);
                }
            } else {
                if (likes === props.upvotes) {
                    setLikes(likes + 1);
                } else {
                    setLikes(likes - 1);
                }
            }

            setColor(color === "bg-red-500" ? "bg-button_color" : "bg-red-500");
        }
        await likePost(props.postID);
    }

    return (
        <button onClick={handleClick} className={`${color} text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl`}>
            <img className="w-3 h-3" src="/assets/like_post.png" alt="Like" />
            {likes}
        </button>
    );
}

export default LikeButton;
