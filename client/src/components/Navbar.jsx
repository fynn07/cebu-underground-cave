import LoginButton from "./ui/loginButton"
import SignupButton from "./ui/signupButton"

const Navbar = () => {
    return(
        <div>
            <div className="flex justify-between items-center border-b-2 border-b-linegrey pb-3">
                <div className="flex items-center pl-3 gap-4">
                    <img className="w-9" src="/assets/logo.png" alt="" />
                    <h1 className="text-white font-inrisans text-3xl">Cebu Underground Cave</h1>
                </div>
                <div className="pr-6 flex items-center gap-12">
                    <LoginButton/>
                    <SignupButton/>
                </div>
            </div>
        </div>
    )
}

export default Navbar