import React, { useState } from 'react';

const MobileDropDown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div onClick={toggleDropdown} className="cursor-pointer">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
                </svg>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <p onClick={() =>{props.setSignupModalShow(false) ; props.setLoginModalShow(true) ; toggleDropdown()}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</p>
                        <p onClick={() =>{props.setSignupModalShow(true) ; props.setLoginModalShow(false) ; toggleDropdown()}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Signup</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileDropDown;
