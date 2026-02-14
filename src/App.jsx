import About from "./sections/About"
import Brands from "./sections/Brands"
import Game from "./sections/Game"
import Home from "./sections/Home"
import RoadMap from "./sections/RoadMap"
import What from "./sections/What"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Home/>
      <About/>
      <RoadMap/>
      <Brands/>
      <What/>
      <Game/>
    </div>
  )
}

export default App
