import { useFetchPostFromID } from "../hooks/useFetchPostFromID";
import BackButton from "./ui/backButton";
import CommentInput from "./ui/commentInput";
import PostContent from "./ui/postContent";
import { Link } from "react-router-dom";

const PostFromID = (props) => {
    const {post, loading, error} = useFetchPostFromID(props.id);
    //TODO: Add loading Screen
    if(loading){
        return(
            <div>
                <h1 className="text-white">LOADING ITEMS</h1>
            </div>
        )
    }
    if(error){
        return(
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

    return(
        <div className="w-full h-full px-6 py-6 flex flex-col">
            <BackButton />
            <PostContent key={post.PostID} postID = {post.PostID} displayname={post.DisplayName} date={post.CreatedAt} title={post.Title} 
            content={post.Content} upvotes={post.Upvotes} commentcount={post.CommentCount} genre={post.Genre} isclicked={true} />
            <CommentInput/>
        </div>
    )
}

export default PostFromID;