import { Routes, Route } from "react-router-dom"

import Home from "./views/Home/Home"

import DallE from "./views/DallE/DallE"
import ChatGPT from "./views/ChatGPT/ChatGPT"

import NotFound from "./views/NotFound/NotFound"

const App = ()=> (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dall-e" element={<DallE />} />
    <Route path="/chat-gpt" element={<ChatGPT />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
