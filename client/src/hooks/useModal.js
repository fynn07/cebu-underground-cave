import { useEffect, useState } from "react"

export const useModal = () => {
    const [signupModalShow, setSignupModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);

    return {signupModalShow, loginModalShow, setSignupModalShow, setLoginModalShow}
}