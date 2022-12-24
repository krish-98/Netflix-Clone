import axios from "../helpers/axios"
import { useEffect, useState } from "react"

const Row2 = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)

      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="my-16 pl-8 flex flex-col gap-6">
      <h2 className="text-2xl lg:text-3xl text-white font-bold">{title}</h2>

      <div className="flex gap-10 overflow-y-hidden overflow-x-scroll cursor-pointer scrollbar-none">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`w-full object-contain max-h-[200px] transition-all hover:scale-105 duration-300 ${
                  isLargeRow &&
                  "max-h-[400px] duration-500 hover:scale-110 opacity-100"
                }`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
      </div>
    </div>
  )
}
export default Row2
