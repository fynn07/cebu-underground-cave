import FlavorText from "./flavorText";
import LoginForm from "./loginForm";

const LoginModal = (props) => {

    const content = (
        <div>
            <div onClick={() => props.setLoginModalShow(false)} className="hover:cursor-pointer absolute top-5 right-7 bg-gray-300 px-2 rounded-full">
                <p className="">X</p>
            </div>
            <FlavorText header={"LOG IN"} subtext={"Welcome Back, Fellow Cebu underground enthusiast! Log in and share your story."}/>
            <LoginForm setLoginModalShow={props.setLoginModalShow} setSignupModalShow={props.setSignupModalShow} />
        </div>
    )

    return props.loginModalShow ? (
        <div className="flex flex-col absolute rounded-xl top-0 left-0 bottom-0 right-0 m-auto w-96 p-8 h-3/4 bg-button_color">
            {content}
        </div>

    ) : (
        <div className="flex-col absolute rounded-xl top-0 left-0 bottom-0 hidden right-0 m-auto w-96 p-8 h-3/4 bg-button_color">
            {content}
        </div>
    )
}

export default LoginModal;