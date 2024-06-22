import { useState } from 'react';
import { loginFormData } from "../../hooks/useLoginFormData";
import { loginUser } from "../../services/api";

const LoginForm = (props) => {
    const { email, password, setEmail, setPassword } = loginFormData();

    const handleRequest = async (e) => {
        e.preventDefault();
        props.setLoading(true);

        try {
            const response = await loginUser(email, password);

            props.setLoggedIn(true);
            props.setLoginModalShow(false);
        } catch (error) {
            console.error(error);
        } finally {
            props.setLoading(false);
        }
    };

    // Pass loading state to the parent component

    return (
        <form onSubmit={handleRequest} className="px-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="text-white font-inrisans text-sm">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-inrisans text-sm">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">Don't Have an Account? </p>
                <p onClick={() => { props.setSignupModalShow(true); props.setLoginModalShow(false) }}
                    className="text-xs text-blue-500 hover:cursor-pointer">
                    Sign Up
                </p>
            </div>
            <div className="text-center pt-8">
                <button className="text-white text-sm font-inrisans py-2 px-6 rounded-2xl bg-linegrey" type="submit">Log In</button>
            </div>
        </form>
    );
}

export default LoginForm;
