import { fetchPosts } from "../services/api";

export const getGenreCount = async(genre) => {
    const data = await fetchPosts();
    const filteredPosts = data.filter(post => post.Genre === genre);
    return filteredPosts.length;
}