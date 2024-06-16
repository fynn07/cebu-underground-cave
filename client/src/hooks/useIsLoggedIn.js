import Cookies from "js-cookie";
import { useEffect, useState } from "react"

export const isLoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(Cookies.get('token')){
            setLoggedIn(true);
        }
        else{
            setLoggedIn(false);
        }
        console.log(loggedIn)
    }, [loggedIn])

    return { loggedIn, setLoggedIn }
}