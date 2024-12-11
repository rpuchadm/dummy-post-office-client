import { useEffect, useState } from "react"

import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"
import AppConfig from "../../AppConfig"

interface AuthFormProps {
  etoken: string
  isLoading: boolean
  handleEToken: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (ev: any) => Promise<void>
}

const AuthForm = ({
  etoken,
  isLoading,
  handleEToken,
  handleSubmit,
}: AuthFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col>
            <h1>Unauthorized</h1>
            <p>
              In order to access this page, you need to provide a valid token.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicToken">
              <Form.Label>Token</Form.Label>
              <Form.Control
                value={etoken}
                onChange={handleEToken}
                type="text"
                placeholder="Enter token"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              disabled={!etoken || isLoading}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

interface AuthContainerProps {
  children: React.ReactNode
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem(AppConfig.TOKEN_ITEM_NAME) || ""
  )
  const [etoken, setEToken] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const handleEToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEToken(e.target.value)
  }
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    localStorage.setItem(AppConfig.TOKEN_ITEM_NAME, etoken)
    setToken(etoken)
  }

  useEffect(() => {
    const lstoken = localStorage.getItem(AppConfig.TOKEN_ITEM_NAME)
    const fetchAuth = async () => {
      const url = AppConfig.API_BASE_URL + "auth"
      const response = await fetch(url, {
        method: "GET",
        credentials: "omit",
        headers: {
          Authorization: `Bearer ${lstoken}`,
        },
      })
      const data = (await response.json()) as { status: string }
      console.log("AuthContainer fetchAuth data:", data)
      if (data.status === "success") {
        setToken(token)
      } else {
        localStorage.removeItem(AppConfig.TOKEN_ITEM_NAME)
      }
      setIsLoading(false)
    }

    if (lstoken) {
      fetchAuth()
    } else {
      setIsLoading(false)
    }
  }, [token])

  if (isLoading) {
    return <Spinner animation="border" role="status" />
  }
  if (!token) {
    return <AuthForm {...{ etoken, isLoading, handleEToken, handleSubmit }} />
  }

  return <>{children}</>
}

export default AuthContainer
