const SignupForm = (props) => {
    return (
        <form action="" method="post" className="px-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label for="email_field" className="text-white font-inrisans text-sm">Email</label>
                <input type="text" name="Email" id="email_field" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label for="display_name_field" className="text-white font-inrisans text-sm">Display Name</label>
                <input type="text" name="DisplayName" id="display_name_field" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label for="password_field" className="text-white font-inrisans text-sm">Password</label>
                <input type="text" name="Password" id="password_field" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label for="confirm_password_field" className="text-white font-inrisans text-sm">Confirm Password</label>
                <input type="text" name="ConfirmPassword" id="confirm_password_field" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">Have an Account? </p>
                <p onClick={() => {props.setSignupModalShow(false) ; props.setLoginModalShow(true)}} 
                    className="text-xs text-blue-500 hover:cursor-pointer">
                    Log In
                </p>
            </div>
            <div className="text-center pt-8">
            <button className="text-white text-sm font-inrisans py-2 px-6 rounded-2xl bg-linegrey" type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default SignupForm;