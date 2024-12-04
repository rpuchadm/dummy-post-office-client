import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Layout from "./components/layout/Layout"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"

function App() {
  return (
    <Router>
      <Layout>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
