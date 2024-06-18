export const sortComments = (comment) => {
    return comment.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt));
}