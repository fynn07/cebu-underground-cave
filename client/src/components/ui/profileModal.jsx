// ProfileModal.js
const ProfileModal = ({ show, onClose, onLogout, onChangeProfilePicture }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white font-inrisans rounded-lg p-4">
                <button
                    className="block w-full text-center p-2 hover:bg-gray-200"
                    onClick={onChangeProfilePicture}
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
            </div>
        </div>
    );
};

export default ProfileModal;
