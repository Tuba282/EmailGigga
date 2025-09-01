import Hero from "./Components/hero"
import Marketing from "./Components/marketing"
import DrawerAppBar from "./Components/navbar"
import Sales from "./Components/sales"
import TextImage from "./Components/textImage"

const App = () => {
  return (
    <div className='max-w-9xl mx-auto'>
      <DrawerAppBar />
      <Hero />
      <Marketing />
      <TextImage />
      <Sales/>
    </div>
  )
}

export default App