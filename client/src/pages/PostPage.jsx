import Adspace from "../components/Adspace"
import Navbar from "../components/Navbar"
import PostFromID from "../components/PostFromID";
import Sidebar from "../components/Sidebar"

import { Link, useParams } from "react-router-dom";

const PostPage = () => {
    const params = useParams();

    return (
        <>
        <div className="h-screen bg-background px-8 pt-4 flex flex-col">
            <Navbar />
            <div className="flex flex-1 overflow-y-hidden">
                <Sidebar />
            <div className="flex-[3] overflow-y-auto">
                <PostFromID id={params.PostID}/>
            </div>
            <div className="flex-1">
                <Adspace />
            </div>
            </div>
        </div>
        </>
    )
}

export default PostPage;