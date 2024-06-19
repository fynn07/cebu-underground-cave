import { useState } from "react";
import { logoutUser } from "../services/api";

export const useHandleProfileModal = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);    

    const handleProfileClick = () => {
        setShowProfileModal(true);
    };

    const handleCloseModal = () => {
        setShowProfileModal(false);
    };
    
    const handleLogout = () => {
        logoutUser();
        setShowProfileModal(false);
    };

    const handleChangeProfilePicture = () => {
        // Add logic to change profile picture
        setShowProfileModal(false);
    };

    return {showProfileModal, handleProfileClick, handleCloseModal, handleLogout, handleChangeProfilePicture}
}