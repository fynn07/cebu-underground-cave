import FlavorText from "./flavorText";
import SignupForm from "./signupForm";

const SignupModal = (props) => {

    const content = (
        <div>
            <div onClick={() => props.setSignupModalShow(false)} className="hover:cursor-pointer absolute top-5 right-7 bg-gray-300 px-2 rounded-full">
                <p className="">X</p>
            </div>
            <FlavorText header={"SIGN UP"} subtext={"Join Underground Cebuano Enjoyers today and chill with like-minded people!"}/>
            <SignupForm setSignupModalShow={props.setSignupModalShow} setLoginModalShow={props.setLoginModalShow}/>
        </div>
    )

    return props.signupModalShow ? (
        <div className="flex flex-col absolute rounded-xl top-0 left-0 bottom-0 right-0 m-auto w-96 p-8 h-3/4 bg-button_color">
            {content}
        </div>

    ) : (
        <div className="flex-col absolute rounded-xl top-0 left-0 bottom-0 hidden right-0 m-auto w-96 p-8 h-3/4 bg-button_color">
            {content}
        </div>
    )
}

export default SignupModal;