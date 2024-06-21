import { useEffect, useState } from "react"

export const useCurrentComponent = (singlePost, submitPage) => {
  const [currentComponent, setCurrentComponent] = useState("Content");
    
  useEffect(() => {
    if (singlePost) {
      setCurrentComponent("PostFromID");
    } else if (submitPage) {
      setCurrentComponent("CreatePost");
    } else {
      setCurrentComponent("Content");
    }
  }, [singlePost, submitPage]);

  return { currentComponent };
}