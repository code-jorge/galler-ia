import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

import images from './images.json';

const App = ()=> (
  <>
    <Header />
    <Gallery photos={images} />
    <Footer />
  </>
);

export default App;
