import { useState } from "react"

export const signupFormData = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return { email, name, password, confirmPassword, setEmail, setName, setPassword, setConfirmPassword }
}