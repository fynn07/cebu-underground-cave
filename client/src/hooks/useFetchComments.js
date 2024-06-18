import { useEffect, useState } from "react";
import { fetchComments } from "../services/api";
import { sortComments } from "../utils/sortComments";

export const useFetchComments = (id) => {
    const [comments, setComments] = useState({});
    const [comment_loading, setLoading] = useState(true);
    const [comment_error, setError] = useState(null);

    useEffect(() => {
        const loadCommentsFromID = async() => {
            try {
                const data = await fetchComments(id);
                setComments(sortComments(data));
            } catch (err) {
                setError(err);
                console.error('Error Fetching Posts: ', err);
            }finally{
                setLoading(false);
            }
        }
        loadCommentsFromID();

    }, []);

    return { comments, comment_loading, comment_error };
}