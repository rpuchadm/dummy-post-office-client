import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
