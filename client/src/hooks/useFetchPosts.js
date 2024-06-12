import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api'

export const useFetchPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async() => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError(err);
                console.error('Error Fetching Posts: ', err);
            }finally{
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return { posts, loading, error};
}
