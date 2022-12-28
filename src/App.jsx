import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import LoginScreen from "./pages/LoginScreen"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase.config"
import { login, logout } from "./features/userSlice"
import { useEffect } from "react"
import NotFound from "./components/NotFound"

const App = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        dispatch(login({ uid: userInfo.uid, email: userInfo.email }))
      } else {
        dispatch(logout())
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  )
}
export default App
