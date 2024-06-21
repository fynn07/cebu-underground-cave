import { useEffect, useState } from 'react';

export const useFilter = () => {
    const [filter, setFilter] = useState(localStorage.getItem('filter') || 'Newest');

    useEffect(() => {
        localStorage.setItem('filter', filter);
    }, [filter]);

    return {filter, setFilter};
}