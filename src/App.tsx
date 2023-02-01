import NavbarComponent from "../src/components/navbar/navbar.component"
import WrapperNav from "./components/wrapper/wrapperComponent"
import DestinationPage from "./pages/destination/DestinationPage"
import HomePage from "./pages/home/HomePage"
import {Routes,Route} from "react-router-dom"


function App() {

  return (
    <main className="h-screen w-screen">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/destination" element={<DestinationPage />}/>
      </Routes>
    </main>)
}

export default App
