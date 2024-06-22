// ProfileModal.js
import React, { useRef } from 'react';
import { Link } from "react-router-dom"

const ProfileModal = ({ show, onClose, onLogout, onChangeProfilePicture }) => {
    const fileInputRef = useRef(null);

    if (!show) return null;

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onChangeProfilePicture(file);
        }
    };

    const handleChangeProfilePictureClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white font-inrisans rounded-lg p-4">
                <Link
                    to="/submit"
                    className="block w-full text-center p-2 hover:bg-gray-200 lg:hidden xl:hidden 2xl:hidden"
                >
                    Create Post
                </Link>
                <button
                    className="block w-full text-center p-2 hover:bg-gray-200"
                    onClick={handleChangeProfilePictureClick}
                >
                    Change Profile Picture
                </button>
                <button
                    className="block w-full text-center p-2 hover:bg-gray-200"
                    onClick={onLogout}
                >
                    Log Out
                </button>
                <button
                    className="block w-full text-center p-2 hover:bg-gray-200 mt-2"
                    onClick={onClose}
                >
                    Close
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    accept="image/*"
                />
            </div>
        </div>
    );
};

export default ProfileModal;
