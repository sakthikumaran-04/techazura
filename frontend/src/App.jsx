import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import SingleEvent from "./components/SingleEvent"
import { Toaster } from 'react-hot-toast';
import EventCoordinators from "./components/EventCoordinators"
import GetTickets from "./components/GetTickets"
import RegClosed from "./components/RegClosed"
function App() {

  return (
    <>
    <BrowserRouter>
    <Toaster />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<SingleEvent />} />
      <Route path="/get-ticket" element={<GetTickets />} />
      <Route path="/coordinators" element={<EventCoordinators />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
