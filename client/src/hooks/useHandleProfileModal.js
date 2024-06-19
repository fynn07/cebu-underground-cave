import { useState } from "react";
import { changeProfilePicture, logoutUser } from "../services/api";

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

    const handleChangeProfilePicture = async (file) => {
        const formData = new FormData();
        formData.append('Image', file);

        const response = await changeProfilePicture(formData);
        
        setShowProfileModal(false);
        window.location.reload();
    };

    return {showProfileModal, handleProfileClick, handleCloseModal, handleLogout, handleChangeProfilePicture}
}
