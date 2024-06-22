import PostContent from "./ui/postContent";
import { useFetchPost } from "../hooks/useFetchPosts";
import FilterContentSection from "./ui/filterContentSection";
import { useGenre } from "../hooks/useGenre";
import { useFilter } from "../hooks/useFilter";
import { useEffect } from "react";
import LoadingScreen from "./ui/loadingScreen";

const Content = ({ container }) => {
    const { genre, setGenre } = useGenre();
    const { filter, setFilter } = useFilter();
    const { posts, loading, error } = useFetchPost(filter, genre);

    useEffect(() => {
        
        if (!loading && posts.length > 0 && container) {
            const imageLinkCount = posts.filter(post => post.ImageLink !== null && post.ImageLink !== 'null').length;
            console.log(imageLinkCount);

            const scrollPosition = localStorage.getItem('scrollPosition');
            if (scrollPosition) {
                const parsedScrollPosition = parseInt(scrollPosition, 10);
                if (!isNaN(parsedScrollPosition)) {
                    container.scrollTop = parsedScrollPosition;
                }
            }
        }
    }, [loading, posts, container]);

    // TODO: Add loading Screen
    if(loading){
        return <LoadingScreen />
    }

    if(error){
        return(
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

    return (
        <div className="w-full h-full px-6 py-6 flex flex-col">
            <FilterContentSection filter={filter} setFilter={setFilter} genre={genre} setGenre={setGenre} />
            {posts.map(post => (
                <PostContent
                    key={post.PostID}
                    postID={post.PostID}
                    hasLiked={post.hasLiked}
                    displayname={post.DisplayName}
                    date={post.CreatedAt}
                    title={post.Title}
                    content={post.Content}
                    image={post.ImageLink}
                    profilePicture={post.ProfilePictureLink}
                    upvotes={post.Upvotes}
                    commentcount={post.CommentCount}
                    genre={post.Genre}
                    isclicked={false}
                />
            ))}
        </div>
    );
};

export default Content;
