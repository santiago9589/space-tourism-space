import DestinationPage from "./pages/destination/DestinationPage"
import HomePage from "./pages/home/HomePage"
import { Routes, Route } from "react-router-dom"
import CrewPage from "./pages/crew/CrewPage"
import TechnologyComponent from "./pages/technology/TechnologyComponent"
import TecnologyPage from "./pages/technology/TechnologyPage"


function App() {

  return (
    <main className="h-screen w-screen container mx-auto overflow-y-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TecnologyPage />} />
      </Routes>
    </main>)
}

export default App
