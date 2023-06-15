import { createContext, useState } from "react";

export const BotContext = createContext()

export const BotProvider = ({children})=>{
    const [chat,setChat]=useState([
        { user: 1, message: 'مرحبا بيك، آني موجود باش نجاوبك على أسألتك 😊'},
        { user: 1, message: <img alt="GIF" src="https://media.giphy.com/media/N7Ns2lkEPai8KdS5gU/giphy.gif" height="150px" width="110px"  />},
        { user: 1, message: "فاش نجمو نعاونوك"},
    ])
    

    return(
        <BotContext.Provider value={{setChat,chat}} >
            {children}
        </BotContext.Provider> 
    )
}