import { useFetchPostFromID } from "../hooks/useFetchPostFromID";
import PostContent from "./ui/postContent";

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
            <PostContent key={post.PostID} postID = {post.PostID} displayname={post.DisplayName} date={post.CreatedAt} title={post.Title} 
            content={post.Content} upvotes={post.Upvotes} commentcount={post.CommentCount} genre={post.Genre} isclicked={true} />
        </div>

    )
}

export default PostFromID;