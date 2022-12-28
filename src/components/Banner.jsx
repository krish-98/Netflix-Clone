import axios from "../helpers/axios"
import requests from "../helpers/requests"
import { useEffect, useState } from "react"

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request?.data?.results[
          Math.floor(Math.random() * request?.data?.results?.length) - 1
        ]
      )

      return request
    }

    fetchData()
  }, [])

  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string

  return (
    <header
      className="h-[448px] text-white relative object-contain"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col justify-center h-full gap-4 pl-10">
        <div>
          <h1 className="text-5xl font-bold">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
        </div>

        <div className="flex gap-4">
          <button className="border-none outline-none bg-black/50 px-6 py-2 rounded-lg hover:text-black hover:bg-slate-100 transition-all duration-200">
            Play
          </button>
          <button className="border-none outline-none bg-black/50 px-6 py-2 rounded-lg hover:text-black hover:bg-slate-100 transition-all duration-200">
            My List
          </button>
        </div>

        <p className="w-[45rem] max-w-[300px] lg:max-w-[45rem] h-[80px]">
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      <div className="h-[7.8rem] bg-gradient-to-t from-[#373737]/5 to-[#111]" />
    </header>
  )
}
export default Banner
