import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [prompt, setPrompt] = useState("");
    const [reply, setReply] = useState("");
    const [prevChats, setPrevChats] = useState([]); // Yahan state define ho gayi
    const [currThreadId, setCurrThreadId] = useState("default-thread");
    const [newChat, setNewChat] = useState(false);

    return (
        <MyContext.Provider value={{ 
            prompt, setPrompt, 
            reply, setReply, 
            prevChats, setPrevChats, 
            currThreadId, setCurrThreadId, 
            newChat, setNewChat 
        }}>
            {children}
        </MyContext.Provider>
    );
};