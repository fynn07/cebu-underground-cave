export const filterGenre = (data, genre) => {
    if (!genre || genre === 'All') {
        return data;
    }
    return data.filter(item => item.Genre === genre);  
}