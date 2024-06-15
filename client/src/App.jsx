import { Toaster } from "react-hot-toast"
import Adspace from "./components/Adspace"
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import LoginModal from "./components/ui/loginModal"
import SignupModal from "./components/ui/signupModal"
import { useModal } from "./hooks/useModal"

function App() {
  const {signupModalShow, loginModalShow, setSignupModalShow, setLoginModalShow} = useModal();

  return (
    <>
      <div className="h-screen bg-background px-8 pt-4 flex flex-col">
        <Toaster/>
        <Navbar setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow}/>
        <div className="flex flex-1 overflow-y-hidden">
            <Sidebar />
          <div className="flex-[3] overflow-y-auto">
            <Content />
          </div>
          <div className="flex-1">
            <Adspace />
          </div>
        </div>
      </div>
        <SignupModal signupModalShow={signupModalShow} setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow}/>
        <LoginModal loginModalShow={loginModalShow} setLoginModalShow={setLoginModalShow} setSignupModalShow={setSignupModalShow}/>
    </>
  )
}

export default App
