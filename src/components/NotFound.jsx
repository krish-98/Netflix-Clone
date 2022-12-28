import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl lg:text-5xl text-[#e50914]">
          404! No such page found
        </h1>
        <Link to="/">
          <p className="text-white lg:text-xl tracking-wide hover:underline">
            Back to <span className="text-[#e50914]">Netflix</span>
          </p>
        </Link>
      </div>
    </div>
  )
}
export default NotFound
