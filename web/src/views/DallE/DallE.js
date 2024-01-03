import Header from "../../components/Header/Header"
import Introduction from "../../components/Introduction/Introduction"
import Gallery from "../../components/Gallery/Gallery"
import Footer from "../../components/Footer/Footer"

import images from './images.json'

const DallE = ()=> (
  <>
    <Header />
    <Introduction content='DALL-E' />
    <Gallery photos={images} source='DALL-E' />
    <Footer source='DALL-E' />
  </>
)

export default DallE