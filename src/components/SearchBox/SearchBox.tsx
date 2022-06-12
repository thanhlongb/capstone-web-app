import { SearchIcon } from "@heroicons/react/solid"
import { useState } from "react"

const SearchBox = () => {
  const [query, setQuery] = useState("")

  return (
    <div>
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Search for customer
      </label>
      <div className="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="nguyen van a"
          className="bg-white relative w-full sm:w-80 border border-gray-300 rounded-md shadow-sm pl-10 pr-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>  
  )
}

export default SearchBox