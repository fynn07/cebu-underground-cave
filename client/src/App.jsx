import { Toaster } from "react-hot-toast"
import Adspace from "./components/Adspace"
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import LoginModal from "./components/ui/loginModal"
import SignupModal from "./components/ui/signupModal"
import { useModal } from "./hooks/useModal"
import { isLoggedIn } from "./hooks/useIsLoggedIn"
import PostFromID from "./components/PostFromID"
import { useParams } from "react-router-dom"

function App(props) {
  const {loggedIn, name, rep, setLoggedIn} = isLoggedIn();
  const {signupModalShow, loginModalShow, setSignupModalShow, setLoginModalShow} = useModal();

  const params = useParams();

  return (
    <>
      <div className="h-screen bg-background px-8 pt-4 flex flex-col">
        <Toaster/>
        <Navbar displayName={name} rep={rep} loggedIn={loggedIn} setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow}/>
        <div className="flex flex-1 overflow-y-hidden">
            <Sidebar />
          <div className="flex-[3] overflow-y-auto">
            {props.isSinglePost ? <PostFromID id={params.PostID}/> : <Content />}
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
