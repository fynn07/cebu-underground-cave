const SignupButton = (props) => {

    return <button onClick={() =>{props.setSignupModalShow(true) ; props.setLoginModalShow(false)} } 
    className="text-black bg-white py-1 px-3 font-inrisans rounded">Get Started</button>
}

export default SignupButton;