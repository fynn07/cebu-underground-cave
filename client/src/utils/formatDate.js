export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.round((now - date) / 1000);
    const minutesAgo = Math.round(secondsAgo / 60);
    const hoursAgo = Math.round(minutesAgo / 60);
    const daysAgo = Math.round(hoursAgo / 24);
    
    if (secondsAgo < 60) {
        return 'just now';
    } else if (minutesAgo < 60) {
        return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    } else if (hoursAgo < 24) {
        return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    } else if (daysAgo < 7) {
        return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
    } else {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
};
