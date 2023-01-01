import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase.config"

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const logout = () => {
    signOut(auth)
    navigate("/")
  }

  return (
    <div className="flex items-center justify-center">
      <Navbar />

      {/* Edit Profile */}
      <div className="flex flex-col items-center mt-56 text-white w-[40%]">
        <h1 className="text-5xl font-semibold w-full">Edit Profile</h1>

        <div className="w-full flex items-center gap-5 pt-6">
          <img
            className="w-20 object-contain self-start"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="logo"
          />

          {/* User's plan info */}
          <div className="w-full">
            <p className="bg-[#818181] py-2 pl-4">{user?.email}</p>
            <h3 className="text-lg font-semibold py-4">Plans</h3>

            {/* Different plans */}
            <div>
              <h4 className="pb-4">Renewal Date: 05/06/2022</h4>

              <div className="px-4">
                <div className="flex justify-between pb-4">
                  <div className="flex flex-col">
                    <span>Premium Plan</span>
                    <span className="text-sm">4k HRD</span>
                  </div>
                  <button className="bg-[#e50914] px-7">Subscribe</button>
                </div>

                <div className="flex justify-between pb-4">
                  <div className="flex flex-col">
                    <span>Standard</span>
                    <span className="text-sm">1080p</span>
                  </div>
                  <button className="bg-[#e50914] px-7">Subscribe</button>
                </div>

                <div className="flex justify-between pb-4">
                  <div className="flex flex-col">
                    <span>Basic Plan</span>
                    <span className="text-sm">720p</span>
                  </div>
                  <button className="bg-[#e50914] px-7">Current Package</button>
                </div>
              </div>
            </div>

            <button onClick={logout} className="bg-[#e50914] w-full py-3 mt-4">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
