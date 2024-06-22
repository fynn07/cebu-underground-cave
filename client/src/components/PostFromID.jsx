import { useFetchComments } from "../hooks/useFetchComments";
import { useFetchPostFromID } from "../hooks/useFetchPostFromID";
import BackButton from "./ui/backButton";
import CommentInput from "./ui/commentInput";
import LoadingScreen from "./ui/loadingScreen";
import PostComment from "./ui/postComment";
import PostContent from "./ui/postContent";

const PostFromID = (props) => {
    const {post, loading, error} = useFetchPostFromID(props.id);
    const {comments, comment_loading, comment_error} = useFetchComments(props.id);

    if(loading || comment_loading){
        return <LoadingScreen />
    }
    if(error || comment_error){
        return(
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

    return(
        <div className="w-full h-full px-6 py-6 flex flex-col">
            <BackButton />
            <PostContent key={post.PostID} postID = {post.PostID} hasLiked={post.hasLiked} displayname={post.DisplayName} date={post.CreatedAt} title={post.Title} 
            content={post.Content} image={post.ImageLink} profilePicture={post.ProfilePictureLink} upvotes={post.Upvotes} commentcount={post.CommentCount} genre={post.Genre} isclicked={true} />
            <CommentInput/>

            {comments.map(comment => <PostComment key={comment.CommentID} content={comment.Content} date={comment.CreatedAt} displayName={comment.DisplayName} 
                profilePicture={comment.ProfilePictureLink} upvotes={comment.Upvotes} />)}


        </div>
    )
}

export default PostFromID;