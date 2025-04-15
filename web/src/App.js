import { Routes, Route } from "react-router-dom"

import Home from "./views/Home/Home"

import DallE from "./views/DallE/DallE"
import ChatGPT from "./views/ChatGPT/ChatGPT"
import ChatGPT45 from "./views/ChatGPT45/ChatGPT45"
import WizardCatSociety from "./views/WizardCatSociety/WizardCatSociety"

import NotFound from "./views/NotFound/NotFound"

const App = ()=> (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dall-e" element={<DallE />} />
    <Route path="/chat-gpt" element={<ChatGPT />} />
    <Route path="/chat-gpt-4-5" element={<ChatGPT45 />} />
    <Route path="/wizard-cat-society" element={<WizardCatSociety />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
