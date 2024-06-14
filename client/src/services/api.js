export const fetchPosts = async() => {
    const data = await fetch('http://localhost:3400/post');
    if(!data.ok){
        throw new Error('Network response was not ok');
    }
    return await data.json();
}

export const fetchPostFromID = async(id) => {
    const data = await fetch(`http://localhost:3400/post/${id}`);
    if(!data.ok){
        throw new Error('Network response was not ok');
    }
    return await data.json();
}
