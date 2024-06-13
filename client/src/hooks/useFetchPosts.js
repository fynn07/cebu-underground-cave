import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { sortData } from '../utils/sortData';
import { filterGenre } from '../utils/filterGenre';

export const useFetchPost = (filter, genre) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async() => {
            try {
                const data = await fetchPosts();
                const genre_specific_data = filterGenre(data, genre);
                const genre_specific_data_sorted = sortData(genre_specific_data, filter);
                setPosts(genre_specific_data_sorted);
            } catch (err) {
                setError(err);
                console.error('Error Fetching Posts: ', err);
            }finally{
                setLoading(false);
            }
        }
        loadPosts();
    }, [filter, genre]);

    return { posts, loading, error};
}
