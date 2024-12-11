import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import Message from "./components/message/Message"
import ListMessages from "./components/listmessages/ListMessages"
import AuthContainer from "./components/auth/AuthContainer"

function App() {
  return (
    <Router>
      <Layout>
        <br />
        <AuthContainer>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/list" element={<ListMessages />} />
            <Route path="/message" element={<Message />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AuthContainer>
      </Layout>
    </Router>
  )
}

export default App
