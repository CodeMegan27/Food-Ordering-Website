import React from "react";
import classes from "./Thumbnails.module.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRatings/StarRating";
import Price from "../Price/Price";

export default function Thumnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/foods/${food.id}`} className={classes.link}>
            <img
              className={classes.Image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />
            <div className={classes.content}>
              <div className={classes.name}>{food.name}</div>
              <span
                className={`${classes.favorite} ${food.favorite ? " " : classes.not
                  }`}
              >
                ❤
              </span>
              <div className={classes.stars}>
                <StarRating stars={food.stars} />
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  <span>{food.origin}</span>
                </div>
                <div className={classes.cook_time}>
                  <span>🕧</span>
                  {food.cookTime}
                </div>
              </div>
              <div className={classes.price}>
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