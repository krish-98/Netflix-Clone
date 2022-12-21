import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  const user = { name: "Murali Krishnan" }
  return (
    <>
      {!user ? (
        <h1>Login</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  )
}
export default App
