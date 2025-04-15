import Header from "../../components/Header/Header"
import SectionGallery from "../../components/SectionGallery/SectionGallery"
import Footer from "../../components/Footer/Footer"

import links from './links.json'

const Home = ()=> (
  <>
    <Header />
    <SectionGallery links={links} />
    <Footer />
  </>
)

export default Home