import Header from "../../components/Header/Header"
import Introduction from "../../components/Introduction/Introduction"
import Gallery from "../../components/Gallery/Gallery"
import Footer from "../../components/Footer/Footer"

import images from './images.json'

const ChatGPT45 = () => (
  <>
    <Header />
    <Introduction content='Chat GPT 4.5' />
    <Gallery photos={images} source='ChatGPT45' />
    <Footer source='Chat GPT 4.5' />
  </>
)

export default ChatGPT45