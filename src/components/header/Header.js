import React from "react";
import "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Header() {
  const user = {
    name: "Megan",
  };

  const {cart} = useCart();

  const logout = () => {};

  return (
    <header className="w-full p-5 bg-indigo-950 text-white text-lg">
      <div className="
      flex 
      w-full 
      h-full 
      justify-between 
      align-middle
      p-3
      
      ">
        <Link to="/" className="classes.logo">
          Megan's Food
        </Link>
        <nav>
          <ul className="list-none flex m-0 justify-center align-middle">
            {user ? (
              <li className="relative">
                <Link className="p-3 inline-block" to="/profile">{user.name}</Link>
                <div className="absolute z-10 bg-sky-900">
                  <Link className="p-3 inline-block" to="/profile">Profile</Link>
                  <Link className="p-3 inline-block" to="/orders">Orders</Link>
                  <a className="p-3 inline-block" href={"d"} onClick={logout}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <Link to="/login">Log In</Link>
            )}
            <li className="leading-normal">
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className="classes.cart_count">{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
