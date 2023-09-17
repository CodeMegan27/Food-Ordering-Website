import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Search() {
  const [term, setTerm] = useState();
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? " ");
  }, [searchTerm]);

  const search = () => {
    term ? navigate("/search/" + term) : navigate("/");
  };

  return (
    <div className=" m-2 p-3">
      <div className="flex justify-center align-middle mt-8">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-gray-300 w-72 mr-4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          placeholder="Search for Foods...."
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />

        <button
          className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-green-400 border border-gray-100 rounded-lg shadow-inner group"
          onClick={search}
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-800 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Search
          </span>
        </button>
      </div>
    </div>
  );
}
