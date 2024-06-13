import PostContent from "./ui/postContent"
import { useFetchPost } from "../hooks/useFetchPosts"
import FilterContentSection from "./ui/filterContentSection";
import { useGenre } from "../hooks/useGenre";
import { useFilter } from "../hooks/useFilter";

const Content = () => {
    const {genre, setGenre} = useGenre();
    const {filter, setFilter } = useFilter();
    const {posts, loading, error} = useFetchPost(filter, genre);

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
            <FilterContentSection filter={filter} setFilter={setFilter} genre={genre} setGenre={setGenre}/>
            {posts.map(post => 
                <PostContent key={post.PostID} displayname={post.DisplayName} date={post.CreatedAt} title={post.Title} 
                content={post.Content} upvotes={post.Upvotes} commentcount={post.CommentCount} genre={post.Genre} />
            )}
        </div>
    )

}

export default Content