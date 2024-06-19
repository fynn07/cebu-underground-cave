export const customProfilePicture = (link) => {
    if (link === "Default" || !link) {
        return '/assets/test_profile.jpg';
    } else {
        return link;
    }
}