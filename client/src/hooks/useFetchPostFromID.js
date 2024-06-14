import { useEffect, useState } from 'react';
import { fetchPostFromID } from "../services/api";

export const useFetchPostFromID = (id) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPostFromID = async() => {
            try {
                const data = await fetchPostFromID(id);
                setPost(data);
            } catch (err) {
                setError(err);
                console.error('Error Fetching Posts: ', err);
            }finally{
                setLoading(false);
            }
        }
        loadPostFromID();
    }, []);

    return { post, loading, error };
}