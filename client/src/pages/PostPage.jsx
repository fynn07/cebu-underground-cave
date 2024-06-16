import Adspace from "../components/Adspace"
import Navbar from "../components/Navbar"
import PostFromID from "../components/PostFromID";
import Sidebar from "../components/Sidebar"
import SignupModal from "../components/ui/signupModal";
import LoginModal from "../components/ui/loginModal";

import { useModal } from "../hooks/useModal";

import { Link, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { isLoggedIn } from "../hooks/useIsLoggedIn";

const PostPage = () => {
    const {loggedIn, setLoggedIn} = isLoggedIn();
    const {signupModalShow, loginModalShow, setSignupModalShow, setLoginModalShow} = useModal();
    const params = useParams();
    return (
        <>
        <div className="h-screen bg-background px-8 pt-4 flex flex-col">
            <Toaster/>
            <Navbar loggedIn={loggedIn} setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow}/>
            <div className="flex flex-1 overflow-y-hidden">
                <Sidebar />
                <div className="flex-[3] overflow-y-auto">
                    <PostFromID id={params.PostID}/>
                </div>
                <div className="flex-1">
                    <Adspace />
                </div>
            </div>
        <SignupModal signupModalShow={signupModalShow} setSignupModalShow={setSignupModalShow}/>
        <LoginModal loginModalShow={loginModalShow} setLoginModalShow={setLoginModalShow}/>
        </div>
        </>
    )
}

export default PostPage;