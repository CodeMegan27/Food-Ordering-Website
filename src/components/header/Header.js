import React from "react";
import "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Header() {
  const user = {
    name: "Megan",
  };

  const { cart } = useCart();

  const logout = () => { };

  return (
    <header className="w-full h-14 bg-green-700 text-white text-lg header fixed z-10 top-0">
      <div
        className="
      flex 
      w-full 
      h-full 
      justify-between 
      align-baseline
      p-3
      gap-3
      "
      >
        <Link
          to="/"
          className="flex flex-col justify-center hover:border-b-2 hover:border-red-500 transition-all"
        >
          Megan's Food
        </Link>
        <nav className="w-80">
          <ul className="list-none flex m-0 w-full h-full justify-around">
            {user ? (
              <li className="relative group transition-all h-full">
                <Link className="block" to="/profile">
                  {user.name}
                </Link>
                <div className="absolute z-10 bg-sky-900 hidden group-hover:block transition-all rounded-lg">
                  <Link
                    className="p-3 block hover:bg-slate-500 rounded-lg"
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <Link className="p-3 block hover:bg-slate-500 " to="/orders">
                    Orders
                  </Link>
                  <a
                    className="p-3 block hover:bg-slate-500 rounded-lg"
                    href={"d"}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <Link to="/login">Log In</Link>
            )}
            <li className="flex flex-col justify-center relative">
              <Link
                className="hover:border-b-2 transition-all hover:border-red-500 w-16"
                to="/cart"
              >
                Cart
                {cart.totalCount > 0 && (
                  <span className="text-whtie text-center bg-red-600 rounded-full w-6 inline-block absolute top-0 right-0">
                    {cart.totalCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
