import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { getUser } from "../services/api";

export const isLoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [rep, setRep] = useState(0);

    const fetchUser = async() => {
        const user = await getUser();
        console.log(user);
        setName(user.DisplayName);
        setRep(user.Rep);
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

    return { loggedIn, name, rep, setLoggedIn }
}