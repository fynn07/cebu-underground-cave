import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { sortData } from '../utils/sortData';

export const useFetchPost = (filter) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async() => {
            try {
                const data = await fetchPosts();
                const filtered_data = sortData(data, filter);
                setPosts(filtered_data);
            } catch (err) {
                setError(err);
                console.error('Error Fetching Posts: ', err);
            }finally{
                setLoading(false);
            }
        }
        loadPosts();
    }, [filter]);

    return { posts, loading, error};
}
