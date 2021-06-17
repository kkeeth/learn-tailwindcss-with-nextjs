export const ResponsiveCard = () => {
  const handleClick = () => alert('clicked!!')

  return (
    <div className="mt-10 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://placedog.net/500/500" alt="random dog photo" />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            Erin Lindford
          </p>
          <p className="text-gray-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button
          className="btn btn-purple"
          onClick={ handleClick }
        >
          Message
        </button>
      </div>
    </div>
  )
}