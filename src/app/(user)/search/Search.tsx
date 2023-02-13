"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
        Search
      </button>
    </form>
  );
}

export default Search;
