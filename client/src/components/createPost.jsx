import { useState } from "react";
import BackButton from "./ui/backButton";
import { postData } from "../hooks/usePostData";
import { submitPost } from "../services/api";
import { Navigate } from "react-router-dom";
import LoadingScreen from "./ui/loadingScreen";

const CreatePost = () => {
    const {title, content, genre, redirect, handleGenre, handleTitle, handleContent, getCounterColor, setRedirect} = postData();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("Image", image);
        formData.append("Title", title);
        formData.append("Content", content);
        formData.append("Genre", genre);

        try {
            setLoading(true);
            const response = await submitPost(formData);
            if(response.id){
                setRedirect(`/${response.id}`);
            }
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }

    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    if(loading){
        return <LoadingScreen/>
    }

    return (
        <div className="w-full h-full px-10 py-6 flex flex-col">
            <BackButton />
            <div className="flex flex-col pt-4 pl-4">
                <div className="flex justify-between">
                    <div className="">
                        <p className="text-white font-inrisans text-2xl">Create Post</p>
                        <select value={genre} onChange={handleGenre} className="text-center bg-transparent text-white mt-4 py-2 border-subtext appearance-none rounded-lg dec border font-inrisans focus:outline-none">
                            <option value="General">General</option>
                            <option value="Music">Music</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Art">Art</option>
                            <option value="Literature">Literature</option>
                            <option value="Love/Lust">Love/Lust</option>
                            <option value="Video Games">Video Games</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-white text-center font-inrisans">Add Image</p>
                        <div className=" relative w-32 h-32 border-2 border-subtext rounded-lg overflow-visible">
                            <input 
                                type="file" 
                                onChange={handleImageUpload} 
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept="image/*"
                            />
                            {image && (
                                <img 
                                    src={URL.createObjectURL(image)} 
                                    alt="Uploaded" 
                                    className="w-full h-full object-cover z-50"
                                />
                            )}
                        </div>
                    </div>

                </div>

                <div className="flex flex-col pt-8 gap-2">
                    <p className="text-white font-inrisans">Title</p>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => handleTitle(e.target.value)}
                        className="text-white px-2 py-2 rounded-lg bg-transparent border border-subtext outline-none"
                    />
                    <p className={`text-right text-sm font-inrisans ${getCounterColor(title.length, 100)}`}>{title.length}/100</p>
                </div>

                <div className="flex flex-col pt-4 gap-2">
                    <p className="text-white font-inrisans">Content</p>
                    <textarea
                        value={content}
                        onChange={(e) => handleContent(e.target.value)}
                        className="text-white px-2 rounded-lg bg-transparent border border-subtext outline-none"
                        cols="30"
                        rows="5"
                    ></textarea>
                    <p className={`text-right text-sm font-inrisans ${getCounterColor(content.length, 300)}`}>{content.length}/300</p>
                </div>

                <div className="py-10 pr-6 text-right">
                    <button onClick={() => handleSubmit()} className="text-white text-center py-2 px-8 bg-linegrey font-inrisans rounded-lg hover:cursor-pointer">Post</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
