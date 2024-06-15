const LoginButton = (props) => {
    return(
        <button onClick={() =>{props.setSignupModalShow(false) ; props.setLoginModalShow(true)} } 
        className="text-white font-inrisans flex items-center gap-2">
            Log in
            <img className="w-4 pt-1" src="/assets/login_symbol.png" alt="login image" />
        </button>
    )

}

export default LoginButton;