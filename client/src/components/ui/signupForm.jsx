import { signupFormData } from "../../hooks/useSignupFormData";
import { signupUser } from "../../services/api";

const SignupForm = (props) => {
    const {email, name, password, confirmPassword, setEmail, setName, setPassword, setConfirmPassword} = signupFormData();

    const handleSubmit = async(e) => {
        e.preventDefault();
        props.setLoading(true);

        try {
        const response = await signupUser(email, name, password, confirmPassword);
            
        } catch (error) {
            console.error(error);
        }finally{
            props.setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="px-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="text-white font-inrisans text-sm">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-inrisans text-sm">Display Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-inrisans text-sm">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-white font-inrisans text-sm">Confirm Password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="p-1 rounded-lg bg-linegrey text-white focus:outline-none" />
            </div>
            <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">Have an Account? </p>
                <p onClick={() => {props.setSignupModalShow(false) ; props.setLoginModalShow(true)}} 
                    className="text-xs text-blue-500 hover:cursor-pointer">
                    Log In
                </p>
            </div>
            <div className="text-center pt-3">
            <button className="text-white text-sm font-inrisans py-2 px-6 rounded-2xl bg-linegrey" type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default SignupForm;