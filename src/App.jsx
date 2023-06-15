import './App.css'
import Dashbored from './Components/Dashbored'
import { BotProvider } from './Context/ChatContext'

function App() {

  
  return (
    <>
    <BotProvider>
      <Dashbored/>
    </BotProvider>
    </>
  )
}

export default App
