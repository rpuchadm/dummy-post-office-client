import "bootswatch/dist/darkly/bootstrap.min.css"
//import "bootswatch/dist/darkly/bootstrap.css"
//import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import Message from "./components/message/Message"
import ListMessages from "./components/listmessages/ListMessages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<ListMessages />} />
        <Route path="/message" element={<Message />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
