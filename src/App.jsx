import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import LoginScreen from "./pages/LoginScreen"

const App = () => {
  const user = null
  return (
    <>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </>
  )
}
export default App
