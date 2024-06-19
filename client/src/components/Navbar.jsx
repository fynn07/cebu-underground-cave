import { Link } from "react-router-dom"
import { logoutUser } from "../services/api"
import LoginButton from "./ui/loginButton"
import SignupButton from "./ui/signupButton"
import ProfileModal from "./ui/profileModal";
import { useState } from "react";
import { useHandleProfileModal } from "../hooks/useHandleProfileModal";
// make context different based on isLoggedIn state
//check isLoggedIn Through cookie
const Navbar = (props) => {
    const {showProfileModal, handleProfileClick, handleCloseModal, handleLogout , handleChangeProfilePicture} = useHandleProfileModal();

    const not_logged_in = (
        <div className="pr-6 flex items-center gap-12">
            <LoginButton setSignupModalShow={props.setSignupModalShow} setLoginModalShow={props.setLoginModalShow}/>
            <SignupButton setSignupModalShow={props.setSignupModalShow} setLoginModalShow={props.setLoginModalShow}/>
        </div>
    );

    const logged_in = (
        <div className="flex gap-3 pr-3">
            <div className="flex items-center">
                <Link to="/submit" className="flex items-center justify-center mr-6 py-2 hover:cursor-pointer bg-gray-200 rounded-lg">
                    <p className="text-black text-sm font-inrisans px-4 text-center">Create Post</p>
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-white font-inrisans">{props.displayName}</p>
                <p className="text-subtext font-inrisans text-sm">{props.rep} Rep</p>
            </div>
            <img
                onClick={handleProfileClick}
                className="w-10 h-10 rounded-full hover:cursor-pointer"
                src="/assets/test_profile.jpg"
                alt=""
            />
        </div>
    );

    return (
        <div>
            <div className="flex justify-between items-center border-b-2 border-b-linegrey pb-3">
                <div className="flex items-center pl-3 gap-4">
                    <img className="w-9" src="/assets/logo.png" alt="" />
                    <h1 className="text-white font-inrisans text-3xl">Cebu Underground Cave</h1>
                </div>
                {props.loggedIn ? logged_in : not_logged_in}
            </div>
            <ProfileModal
                show={showProfileModal}
                onClose={handleCloseModal}
                onLogout={handleLogout}
                onChangeProfilePicture={handleChangeProfilePicture}
            />
        </div>
    );
};

export default Navbar;