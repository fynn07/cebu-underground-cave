import { Link } from "react-router-dom";

const BackButton = () => {
    return(
        <div className="border-b border-subline pb-3 pl-2">
            <Link to="/" className="text-white"><img className="w-4" src="/assets/arrow_image.png" alt="" /></Link>
        </div>
    )
}

export default BackButton;