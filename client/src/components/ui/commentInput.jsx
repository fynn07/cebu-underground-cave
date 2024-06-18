import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useParams } from "react-router-dom";
import { submitComment } from "../../services/api";

const CommentInput = () => {
    const { PostID } = useParams();
    const [comment, setComment] = useState("");
    
    const handleClick = async(e) => {
        e.preventDefault();
        const token = Cookies.get('token');
        if(!token){
            toast.error("Log in to comment");
            return;
        }

        const result = await submitComment(token, comment, PostID);
    }

    return (
        <form onSubmit={handleClick} className="px-2 pb-6" action="" method="post">
            <input onChange={(e) => setComment(e.target.value)} className="w-full h-10 p-4 rounded-xl bg-linegrey text-subtext focus:text-white focus:outline-select_highlight" 
            placeholder="Add a Comment" type="text" name="" id=""/>
        </form>
    )
}

export default CommentInput;