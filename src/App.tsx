import Blogs from "./Components/blogs"
import Footer from "./Components/footer"
import Hero from "./Components/hero"
import Marketing from "./Components/marketing"
import DrawerAppBar from "./Components/navbar"
import Prising from "./Components/prising"
import Sales from "./Components/sales"
import SemiFooter from "./Components/semiFooter"
import TextImage from "./Components/textImage"

const App = () => {
  return (
    <div className='max-w-9xl mx-auto'>
      <DrawerAppBar />
      <Hero />
      <Marketing />
      <TextImage />
      <Sales/>
      <Prising />
      <Blogs />
      <SemiFooter/>
      <Footer />
    </div>
  )
}

export default App