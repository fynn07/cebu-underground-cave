import { useState } from "react";

export const postData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [genre, setGenre] = useState("General");
    const [redirect, setRedirect] = useState(null);

    const handleTitle = (e) => {
        if (e.length <= 100) {
            setTitle(e);
        }
    }

    const handleContent = (e) => {
        if (e.length <= 300) {
            setContent(e);
        }
    }

    const handleGenre = (e) => {
        setGenre(e.target.value);
    } 

    const getCounterColor = (length, max) => {
        return length >= max ? "text-red-500" : "text-white";
    }

    return {title, content, genre, redirect, handleGenre, handleTitle, handleContent, getCounterColor, setRedirect}
}