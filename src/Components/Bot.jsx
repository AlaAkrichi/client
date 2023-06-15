import React, { useContext, useRef, useState,useEffect   } from 'react'
import Styles from './Bot.module.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'; 
import { BotContext } from '../Context/ChatContext';
import axios from "axios";

export default function Bot(props) {
  const chatContainerRef = useRef(null);
  const { handleClose, open } = props;
  const {chat, setChat} = useContext(BotContext)
  const [question,setQuestion]=useState("")
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };  
  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  const handelQuesrtionChange=(e)=>{
    setQuestion(e.target.value)
  }
  const handelSubmit = async ()=>{
    sendMessage(question)
  } 
  const sendMessage = async (question)=>{
    try{
      const response = await axios.get(`http://localhost:8000/classify`,{params:{question:question}})
      if (response.status === 200) {
        setChat([...chat, { user: 0, message: question } ,{ user: 1, message: response.data.reponse }]);
        setQuestion("")
      }
    }catch (erreur){
      console.log(erreur)
    }
}
  return (
    <>
    <div className={Styles.chatHeader} >
      <h3> chat bot </h3>
      <div onClick={handleClose} > ❌ </div>
    </div>
    <div className={Styles.chatBody}  ref={chatContainerRef}> 
    {chat.map(item=>(<>

    <div className={ item.user ===1 ? Styles.botMessage : Styles.userMessage } > 
    <div className={Styles.messageText} >
    {item.message} 
    </div>
    </div>
    </>))}
    <div className={Styles.chatFooter} > 
    <div className={Styles.chatInput} > 
  
    <input type="text" id="question" name="question"  value={question} onChange={handelQuesrtionChange}/>
    </div>
    <div className={Styles.sendButton} > 
    <Button variant="contained" size='small' endIcon={<SendIcon />}  onClick={handelSubmit} />
    </div>
    </div>
    </div>
    </>
  )
}
