import { useState } from 'react';

export const useFilter = () => {
    const [filter, setFilter] = useState('Newest');
    return {filter, setFilter};
}