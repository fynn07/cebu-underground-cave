import PostContent from "./ui/postContent"
import { useFetchPost } from "../hooks/useFetchPosts"

const Content = () => {
    const {posts, loading, error} = useFetchPost();
    console.log(posts);

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
            <div className="flex gap-10 border-b border-subline pb-3">
                <button className="font-inrisans text-subtext text-sm">Music V</button>
                <button className="font-inrisans text-subtext text-sm">Newest V</button>
            </div>

            {posts.map(post => 
                <PostContent displayname={post.DisplayName} title={post.Title} 
                content={post.Content} upvotes={post.Upvotes} commentcount={post.CommentCount} />
            )}
        </div>
    )

}

export default Content