import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/booksSlice";
import { useState } from "react";

export default function Searchbar({ children }) {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(search));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 mb-3"
    >
      <label
        className="input input-bordered flex items-center gap-2 w-1/2 justify-center p-3"
      >
        <input
          type="text"
          className="grow w-full p-3 rounded"
          placeholder={children}
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className="p-2 bg-transparent" style={{ marginLeft: "10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 opacity-70"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
          />
        </svg>
        </button>
      </label>
    </form>
  );
}
