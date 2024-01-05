import Header from "../../components/Header/Header"
import Introduction from "../../components/Introduction/Introduction"
import Gallery from "../../components/Gallery/Gallery"
import Footer from "../../components/Footer/Footer"

import images from './images.json'

const WizardCatSociety = () => (
  <>
    <Header />
    <Introduction content='Wizard Cat Society' />
    <Gallery photos={images} source='WCS' />
    <Footer source='Chat GPT' />
  </>
)

export default WizardCatSociety