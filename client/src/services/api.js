import { toast } from "react-hot-toast";

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

export const signupUser = async (Email, DisplayName, Password, ConfirmPassword) => {
    try {
        const response = await fetch('http://localhost:3400/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email,
                Password,
                ConfirmPassword,
                DisplayName,
                ProfilePictureLink: 'Default'
            })
        });

        const data = await response.json();

        if (!response.ok) {
            toast.error(data.error);
            return data.error;
        }

        toast.success("Successfully Signed Up");
        return data;
    } catch (error) {
        console.error("There was an error", error);
        throw error; 
    }
}
