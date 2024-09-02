"use client";

import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <form className="flex items-center border-[1px] border-neutral-700 rounded-full overflow-hidden w-2/5">
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-none px-6 py-2 bg-neutral-900"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <button type="submit" className="px-3 bg-neutral-800 border-none min-h-full hover:bg-neutral-700 transition-all ease-in-out">
        <MdOutlineSearch className="h-10 w-6" />
      </button>
    </form>
  );
}

export default Search;
