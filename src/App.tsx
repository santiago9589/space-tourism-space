import DestinationPage from "./pages/destination/DestinationPage"
import HomePage from "./pages/home/HomePage"
import { Routes, Route ,useLocation} from "react-router-dom"
import CrewPage from "./pages/crew/CrewPage"
import TecnologyPage from "./pages/technology/TechnologyPage"
import { AnimatePresence } from "framer-motion"


function App() {

  const location = useLocation()

  return (
    <main className="h-screen w-screen container mx-auto overflow-y-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TecnologyPage />} />
        </Routes>
      </AnimatePresence>
    </main>)
}

export default App
