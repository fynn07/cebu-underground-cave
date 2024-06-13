import { useState } from 'react';

export const useGenre = () => {
    const [genre, setGenre] = useState('All');
    return {genre, setGenre};
}