import { useEffect, useState } from 'react';

export const useGenre = () => {
    const [genre, setGenre] = useState(localStorage.getItem('genre') || 'All');

    useEffect(() => {
        localStorage.setItem('genre', genre);
    }, [genre]);

    return {genre, setGenre};
}