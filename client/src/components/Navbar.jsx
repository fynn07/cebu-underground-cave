import { logoutUser } from "../services/api"
import LoginButton from "./ui/loginButton"
import SignupButton from "./ui/signupButton"

// make context different based on isLoggedIn state
//check isLoggedIn Through cookie

const Navbar = (props) => {
    const not_logged_in = (
        <div className="pr-6 flex items-center gap-12">
            <LoginButton setSignupModalShow={props.setSignupModalShow} setLoginModalShow={props.setLoginModalShow}/>
            <SignupButton setSignupModalShow={props.setSignupModalShow} setLoginModalShow={props.setLoginModalShow}/>
        </div>
    )

    const logged_in = (
        <div className="flex gap-3 pr-3 ">
            <div className="flex flex-col items-center">
                <p className="text-white font-inrisans">Cool_Username</p>
                <p className="text-subtext font-inrisans text-sm">36 Rep</p>
            </div>
            <img onClick={logoutUser} className="w-10 h-10 rounded-full hover:cursor-pointer" src="/assets/test_profile.jpg" alt="" />
        </div>
    )

    return(
        <div>
            <div className="flex justify-between items-center border-b-2 border-b-linegrey pb-3">
                <div className="flex items-center pl-3 gap-4">
                    <img className="w-9" src="/assets/logo.png" alt="" />
                    <h1 className="text-white font-inrisans text-3xl">Cebu Underground Cave</h1>
                </div>
                {console.log("login status: ", props.loggedIn)}
                {props.loggedIn ? logged_in : not_logged_in}
            </div>
        </div>
    )
}

export default Navbar