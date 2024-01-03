import Header from "../../components/Header/Header"
import Introduction from "../../components/Introduction/Introduction"
import Gallery from "../../components/Gallery/Gallery"
import Footer from "../../components/Footer/Footer"

import images from './images.json'

const ChatGPT = () => (
  <>
    <Header />
    <Introduction content='Chat GPT' />
    <Gallery photos={images} source='ChatGPT' />
    <Footer source='Chat GPT' />
  </>
)

export default ChatGPT