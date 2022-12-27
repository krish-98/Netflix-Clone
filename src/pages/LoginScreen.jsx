import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SignIn from "./SignIn"

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  const navigate = useNavigate()
  return (
    <div
      className="relative h-full bg-gradient-to-t from-red-900 to-red-800s z-10"
      style={{
        background: `url(
          "https://netflixjunkie.com/wp-content/uploads/2021/11/Netflix-Background-1-1140x600.jpg"
        ) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <nav className={`w-full h-[30] p-4`}>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              className="w-32 object-contain pl-5 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="logo"
            />
          </Link>

          <button
            onClick={() => {
              setSignIn(true)
              // navigate("/login")
            }}
            className="bg-[#e50914] text-white font-semibold px-4 py-2 hover:text-[#e50914] hover:bg-white transition-all duration-300"
          >
            Sign In
          </button>
        </div>
      </nav>

      <div>
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <div className="text-white flex flex-col justify-center gap-8 h-[calc(100vh-72px)] px-4 text-center">
              <h2 className="text-3xl lg:text-5xl">
                Unlimited films, TV programmes and more.
              </h2>
              <p className="text-xl lg:text-3xl">
                Watch anywhere. Cancel at any time.
              </p>
              <p className="text-sm lg:text-lg">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className="w-full text-center">
                <form className="">
                  <input className="py-2 lg:py-4" type="text" />
                  <button
                    onClick={() => {
                      setSignIn(true)
                      navigate("/login")
                    }}
                    className="bg-[#e50914] text-white p-2 px-3 lg:p-4 uppercase"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default LoginScreen
