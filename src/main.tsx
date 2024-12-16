import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import Layout from "./components/layout/Layout.tsx"
import AuthContainer from "./components/auth/AuthContainer.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <br />
      <AuthContainer>
        <App />
      </AuthContainer>
    </Layout>
  </StrictMode>
)
