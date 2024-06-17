import { useState } from "react";

export const postData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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

    const getCounterColor = (length, max) => {
        return length >= max ? "text-red-500" : "text-white";
    }

    return {title, content, handleTitle, handleContent, getCounterColor}
}