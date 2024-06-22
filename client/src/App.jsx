import { useState, useCallback, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import Adspace from "./components/Adspace";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginModal from "./components/ui/loginModal";
import SignupModal from "./components/ui/signupModal";
import { useModal } from "./hooks/useModal";
import { isLoggedIn } from "./hooks/useIsLoggedIn";
import PostFromID from "./components/PostFromID";
import { useParams } from "react-router-dom";
import CreatePost from "./components/createPost";
import { useCurrentComponent } from "./hooks/useCurrentComponent";

function App({ isSinglePost, submitPage }) {
  const { loggedIn, name, rep, profilePicture } = isLoggedIn();
  const { signupModalShow, loginModalShow, setSignupModalShow, setLoginModalShow } = useModal();
  const { currentComponent } = useCurrentComponent(isSinglePost, submitPage);

  const params = useParams();
  const contentContainerRef = useRef(null);

  const logScrollPosition = useCallback(() => {
    if (currentComponent === "Content" && contentContainerRef.current && contentContainerRef.current.scrollTop !== 0) {
      console.log(contentContainerRef.current.scrollTop);
      localStorage.setItem('scrollPosition', contentContainerRef.current.scrollTop);
    }
  }, [currentComponent]);

  useEffect(() => {
    const container = contentContainerRef.current;
    if (container) {
      container.addEventListener('scroll', logScrollPosition);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', logScrollPosition);
      }
    };
  }, [logScrollPosition, contentContainerRef.current]);

  return (
    <>
      <Toaster />
      <div className="h-screen bg-background pt-4 flex flex-col md:px-2 lg:px-4 xl:px-8 2xl:px-8">
        <Navbar displayName={name} rep={rep} loggedIn={loggedIn} setSignupModalShow={setSignupModalShow} profilePicture={profilePicture} setLoginModalShow={setLoginModalShow} />

        <div className="flex flex-1 overflow-y-hidden">
          <Sidebar />
          <div ref={contentContainerRef} className="flex-[3] overflow-y-auto 2xl:flex-[4]">
            {isSinglePost ? (<PostFromID id={params.PostID} />) : submitPage ? (<CreatePost />) : (<Content container={contentContainerRef.current} />)}
          </div>
          <div className="flex-1 overflow-y-auto bg-black hidden md:flex lg:flex xl:flex 2xl:flex">
            <Adspace />
          </div>
        </div>

      </div>
      <SignupModal signupModalShow={signupModalShow} setSignupModalShow={setSignupModalShow} setLoginModalShow={setLoginModalShow} />
      <LoginModal loginModalShow={loginModalShow} setLoginModalShow={setLoginModalShow} setSignupModalShow={setSignupModalShow} />
    </>
  );
}

export default App;