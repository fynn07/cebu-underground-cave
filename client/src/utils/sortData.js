export const sortData = (data, filterType) => {
    if (filterType === 'Newest') {
        return data.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt));
    }
    if (filterType === 'Best') {
        return data.sort((a, b) => b.Upvotes - a.Upvotes);
    }
    if (filterType === 'Engaged') {
        return data.sort((a, b) => (b.Upvotes + b.CommentCount) - (a.Upvotes + a.CommentCount));
    }
    return data;
}
