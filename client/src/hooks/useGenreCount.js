import { useEffect, useState } from 'react';
import { getGenreCount } from "../utils/getGenreCount";

export const useGenreCount = () => {
    const genres = ['General', 'Music', 'Fashion', 'Art', 'Literature', 'Love/Lust', 'Video Games'];
    const [genreCounts, setGenreCounts] = useState({});

    useEffect(() => {
        const fetchGenreCounts = async () => {
            const counts = {};
            for (const genre of genres) {
                counts[genre] = await getGenreCount(genre);
            }
            setGenreCounts(counts);
        };

        fetchGenreCounts();
    }, []);

    return {genres, genreCounts}

}