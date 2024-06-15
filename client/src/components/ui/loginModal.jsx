const LoginModal = (props) => {

    const content = (
        <div>
            <div onClick={() => props.setLoginModalShow(false)} className="hover:cursor-pointer absolute top-5 right-7 bg-gray-300 px-2 rounded-full">
                <p className="">X</p>
            </div>
            <div className="flex flex-col gap-2 border-b border-linegrey pb-4 mb-4 pt-3">
                <p className="text-white font-inrisans text-2xl pl-3">LOG IN</p>
                <p className="text-center text-gray-300 font-inrisans">Welcome Back, Fellow Cebu underground enthusiast! Log in and share 
                your story.
                </p>
            </div>
            <form action="" method="post" className="px-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label for="email_field" className="text-white font-inrisans text-sm">Email</label>
                    <input type="text" name="Email" id="email_field" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                    <label for="password_field" className="text-white font-inrisans text-sm">Password</label>
                    <input type="text" name="Password" id="password_field" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">Dont Have an Account? </p>
                    <p onClick={() => {props.setSignupModalShow(true) ; props.setLoginModalShow(false)}} 
                        className="text-xs text-blue-500 hover:cursor-pointer">
                        Sign Up
                    </p>
                </div>
                <div className="text-center pt-8">
                <button className="text-white text-sm font-inrisans py-2 px-6 rounded-2xl bg-linegrey" type="submit">Log In</button>
                </div>
            </form>
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