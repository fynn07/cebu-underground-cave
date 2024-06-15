import { useEffect } from "react";

const SignupButton = (props) => {

    return <button onClick={() => props.setModal(true)} className="text-black bg-white py-1 px-3 font-inrisans rounded">Get Started</button>
}

export default SignupButton;