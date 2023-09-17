import React from "react";
import './Thumbnails.module.css';
import classes from "./Thumbnails.module.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRatings/StarRating";
import Price from "../Price/Price";

export default function Thumnails({ foods }) {
  return (
    <ul className="flex flex-wrap justify-center align-middle p-0 list-none">
      {foods.map((food) => (
        <li key={food.id} className="w-80 h-96 flex flex-col m-4 overflow-hidden border-2 border-slate-500 rounded-md text-white">
          <Link to={`/food/${food.id}`} className={classes.link}>
            <img
              className="object-cover h-52 w-full transition-all hover:scale-150 overflow-hidden"
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />
            <div className="relative mt-4 px-3 py-3 text-sm">
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${food.favorite ? " " : classes.not
                  }`}
              >
                ❤
              </span>
              <div className="mx-2.5 my-2.5">
                <StarRating stars={food.stars} />
              </div>
              <div className="flex justify-between align-baseline">
                <div className="mt-2.5 mb-2.5">
                  {
                    food.origins.map(origin => (
                      <span className="rounded-lg bg-green-700 text-white px-0.5 py-1.5 ml-0.5 text-xs" key={origin}>{origin}</span>
                    ))
                  }
                </div>
                <div className="mt-1.5 mb-1.5 text-xs text-right">
                  <span>🕧`{food.cooktime} minutes`</span>
                  
                </div>
              </div>
              <div className="absolute mt-1.5 bg-yellow-400 text-white p-1 rounded-md ml-2 font-semibold shadow-md">
                <Price price={food.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ❤️
//<span>{food.origins}</span>