const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center text-white">
      <div className="bg-black flex flex-col justify-center items-center gap-6 h-[450px] rounded-md md:h-[600px] md:px-10 ">
        <h1 className="text-5xl font-semibold tracking-wide">Sign In</h1>

        <form className="flex flex-col w-[300px] lg:w-[400px] gap-3 px-6">
          <label htmlFor="email">Email</label>
          <input
            className="py-3 pl-4 bg-[#333333] text-[#8c8c8c] border-none outline-none rounded-md"
            id="email"
            type="text"
            placeholder="netflix@email.com"
          />

          <label htmlFor="password">Password</label>
          <input
            className="py-3 pl-4 bg-[#333333] text-[#8c8c8c] border-none outline-none rounded-md"
            id="password"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#e50914] text-white py-3 mt-4 rounded-md">
            Sign In
          </button>

          <h4 className="text-center space-x-1">
            <span className="text-[#8c8c8c]">New to Netflix?</span>
            <span className="cursor-pointer hover:underline">Sign up Now</span>
          </h4>
        </form>
      </div>
    </div>
  )
}
export default SignIn
