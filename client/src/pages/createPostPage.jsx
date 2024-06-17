import { Navigate } from "react-router-dom";
import App from "../App";
import Cookies from "js-cookie";

const CreatePostPage = () => {
    const loggedIn = Cookies.get('token');

   return loggedIn ? <App submitPage={true} /> : <Navigate to="/" />
}

export default CreatePostPage;