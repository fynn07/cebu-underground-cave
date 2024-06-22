import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

//DEV
//http://localhost:3400/

//PROD
//https://cebu-underground-cave-backend.vercel.app/

const BACKEND_URL = "https://cebu-underground-cave-backend.vercel.app/";

export const fetchPosts = async() => {
    const token = Cookies.get('token');

    if(!token){
        const data = await fetch(`${BACKEND_URL}post_offline`);

        if(!data.ok){
            throw new Error('Network response was not ok');
        }
        return await data.json();
    }

    const data = await fetch(`${BACKEND_URL}post_online`, {
        method : "GET",
        headers: {
            'Authorization' : token
        }
    });
    if(!data.ok){
        throw new Error('Network response was not ok');
    }
    return await data.json();
}

export const fetchPostFromID = async(id) => {
    const token = Cookies.get('token');

    if(!token){
        const data = await fetch(`${BACKEND_URL}post_offline/${id}`);
        if(!data.ok){
            throw new Error('Network response was not ok');
        }
        return await data.json();
    }
    
    const data = await fetch(`${BACKEND_URL}post_online/${id}`, {
        method : "GET",
        headers: {
            'Authorization' : token
        }
    });
    if(!data.ok){
        throw new Error('Network response was not ok');
    }
    return await data.json();
}

export const submitPost = async(formData) => {
    const token = Cookies.get('token');

    if(!token){
        return;
    }
    try {
        const response = await fetch(`${BACKEND_URL}post`, {
            method: 'POST',
            headers: {
                'Authorization' : token
            },
            body : formData
        });

        const data = await response.json();

        if(!response.ok){
            toast.error(data.error || 'An error occured');
            return data.error;
        }

        return data;
        
    } catch (error) {
        console.log('there was an error', error);
    }

}

export const fetchComments = async (PostedFromID) => {
    try {
        const response = await fetch(`${BACKEND_URL}comment?PostedFromID=${PostedFromID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const submitComment = async(Token, Content, PostedFromID) => {
    try {
        const response = await fetch(`${BACKEND_URL}comment`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : Token
            },
            body : JSON.stringify({
                Content,
                PostedFromID
            })
        });

        const data = await response.json();

        if(!response.ok){
            toast.error(data.error || 'An error occured');
            return data.error;
        }

        window.location.reload();
        return data;
        
    } catch (err) {
        console.log('there was an error', err);
    }
}

export const loginUser = async(Email, Password) => {
    try {
        const response = await fetch(`${BACKEND_URL}login?`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Email, 
                Password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            toast.error(data.error || 'An error occurred');
            return { error: data.error };
        }


        Cookies.set('token', data.token, 
        {
            expires: 1/24
        })

        window.location.reload();

        return data;
    } catch (error) {
        console.error("There was an error", error);
        throw error;
    }
};

export const signupUser = async (Email, DisplayName, Password, ConfirmPassword) => {
    try {
        const response = await fetch(`${BACKEND_URL}signup`, {
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

        Cookies.set('token', data.token, 
        {
            expires: 1/24
        })

        window.location.reload();

        return data;
    } catch (error) {
        console.error("There was an error", error);
        throw error; 
    }
}

export const logoutUser = async() => {
    try {
        const response = await fetch(`${BACKEND_URL}logout`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();

        if(!response.ok){
            toast.error(data.error);
            return data.error;
        }

        Cookies.remove('token');

        window.location.reload();

    } catch (error) {
        console.error(err);
    }
}

export const getUser = async() => {
    try {
        const token = Cookies.get('token');
        if(!token){
            return;
        }
        const response = await fetch(`${BACKEND_URL}getUser`, {
            method : 'GET',
            headers : {
                'Authorization' : token
            }
        })

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(err);
    }
}

export const getAllUsers = async() => {
    try {
        const response = await fetch(`${BACKEND_URL}users`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error); 
    }
}

export const changeProfilePicture = async(formData) => {
    const token = Cookies.get('token');

    if(!token){
        console.log("NO TOKEN");
    }
    try {
        const response = await fetch(`${BACKEND_URL}changeProfilePicture`, {
            method : 'POST',
            headers : {
                'Authorization' : token,
            },
            body : formData
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const likePost = async(postID) => {
    const token = Cookies.get('token');

    if(!token){
        console.log("NO TOKEN");
        toast.error("Must Be Logged In to Like Post");
        return;
    }

    try {
        const response = await fetch(`${BACKEND_URL}like`, {
            method : 'POST',
            headers : {
                'Authorization' : token,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                postID
            })
        })
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
