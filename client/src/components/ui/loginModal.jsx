import { useState } from 'react';
import FlavorText from "./flavorText";
import LoginForm from "./loginForm";
import LoadingScreen from './loadingScreen';

const LoginModal = (props) => {
    const [loading, setLoading] = useState(false);

    const content = (
        <div className="relative z-10">
            <div onClick={() => props.setLoginModalShow(false)} className="hover:cursor-pointer absolute top-0 right-2 bg-gray-300 px-2 rounded-full z-20">
                <p className="">X</p>
            </div>
            <FlavorText header={"LOG IN"} subtext={"Welcome Back, Fellow Cebu underground enthusiast! Log in and share your story."} />
            <LoginForm setLoggedIn={props.setLoggedIn} setLoginModalShow={props.setLoginModalShow} setSignupModalShow={props.setSignupModalShow} setLoading={setLoading} />
        </div>
    );

    return props.loginModalShow ? (
        <div className="flex flex-col absolute rounded-xl top-0 left-0 bottom-0 right-0 m-auto w-72 p-8 h-3/4 bg-button_color lg:w-80 xl:w-96 2xl:w-96">
            {loading ? (<LoadingScreen/>) : (content)}
        </div>
    ) : (
        <div className="flex-col absolute rounded-xl top-0 left-0 bottom-0 hidden right-0 m-auto w-96 p-8 h-3/4 bg-button_color">
            {content}
        </div>
    )
}

export default LoginModal;
