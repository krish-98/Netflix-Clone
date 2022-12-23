import { useEffect, useState } from "react"

const Navbar = () => {
  const [show, setShow] = useState(false)

  const transistionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transistionNavbar)

    return () => {
      window.removeEventListener("scroll", transistionNavbar)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full h-[30] p-4 z-[100] ${
        show && "bg-black"
      } transition-all duration-500`}
    >
      <div className="flex justify-between items-center">
        <img
          className="w-32 object-contain pl-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <img
          className=" w-8 object-contain cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="account"
        />
      </div>
    </nav>
  )
}
export default Navbar
