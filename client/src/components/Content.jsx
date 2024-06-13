import PostContent from "./ui/postContent"
import { useFetchPost } from "../hooks/useFetchPosts"
import { useState } from "react";
import FilterContentSection from "./ui/filterContentSection";

const Content = () => {
    const [filter, setFilter] = useState('Newest');
    const {posts, loading, error} = useFetchPost(filter);

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
            <FilterContentSection filter={filter} setFilter={setFilter}/>
            {posts.map(post => 
                <PostContent key={post.PostID} displayname={post.DisplayName} date={post.CreatedAt} title={post.Title} 
                content={post.Content} upvotes={post.Upvotes} commentcount={post.CommentCount} />
            )}
        </div>
    )

}

export default Content