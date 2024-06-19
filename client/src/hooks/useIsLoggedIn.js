import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { getUser } from "../services/api";

export const isLoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [rep, setRep] = useState(0);
    const [profilePicture, setProfilePicture] = useState("");

    const fetchUser = async() => {
        const user = await getUser();
        setName(user.DisplayName);
        setRep(user.Rep);
        setProfilePicture(user.ProfilePictureLink)
    }

    useEffect(() => {
        if(Cookies.get('token')){
            setLoggedIn(true);
            fetchUser();
        }
        else{
            setLoggedIn(false);
            setName('');
            setRep(0);
        }
    }, [loggedIn])

    return { loggedIn, name, rep, profilePicture, setLoggedIn }
}