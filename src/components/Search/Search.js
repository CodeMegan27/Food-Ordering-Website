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
    <div className="flex justify-center align-middle m-2 p-3">
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-gray-300 w-64 mr-4 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="text"
        placeholder="Search for Foods...."
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />

      <button
        className="border-2 w-40 rounded-lg bg-green-600 text-white outline-none hover:bg-green-900"
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}
