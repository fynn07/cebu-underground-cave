import { useEffect, useState } from "react";
import { getAllUsers } from "../services/api";

export const useFetchUsers = () => {
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async() => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (err) {
                setError(err);
                console.error('Error Fetching Posts: ', err);
            }finally{
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    return { users, loading, error };
}