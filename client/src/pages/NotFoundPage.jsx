import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="h-screen bg-background px-8 pt-4 flex flex-col">
        <Navbar />
        <div className="flex flex-col gap-4 items-center justify-center h-full overflow-y-hidden">
            <p className="text-white text-2xl">404 Not Found</p>
            <Link className="text-white bg-subline px-4 py-2 border rounded-md" to="/">Home</Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage;