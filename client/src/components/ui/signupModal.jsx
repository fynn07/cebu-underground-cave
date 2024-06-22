import React, { useState } from 'react';
import FlavorText from "./flavorText";
import SignupForm from "./signupForm";
import LoadingScreen from './loadingScreen';

const SignupModal = (props) => {
    const [loading, setLoading] = useState(false);

    const content = (
        <div className={`relative flex flex-col h-full ${loading ? 'hidden' : 'block'}`}>
            <div onClick={() => props.setSignupModalShow(false)} className="hover:cursor-pointer absolute top-0 right-2 bg-gray-300 px-2 rounded-full">
                <p className="">X</p>
            </div>
            <FlavorText header={"SIGN UP"} subtext={"Join Underground Cebuano Enjoyers today and chill with like-minded people!"} />
            <div className="flex-1 overflow-y-auto">
                <SignupForm setSignupModalShow={props.setSignupModalShow} setLoginModalShow={props.setLoginModalShow} setLoading={setLoading} />
            </div>
        </div>
    );

    return props.signupModalShow ? (
        <div className="flex flex-col absolute rounded-xl top-0 left-0 bottom-0 right-0 m-auto w-72 p-8 h-3/4 bg-button_color lg:w-80 xl:w-96 2xl:w-96">
            {loading && <LoadingScreen />}
            {content}
        </div>
    ) : (
        <div className="flex-col absolute rounded-xl top-0 left-0 bottom-0 hidden right-0 m-auto w-96 p-8 h-3/4 bg-button_color">
            {content}
        </div>
    );
}

export default SignupModal;
