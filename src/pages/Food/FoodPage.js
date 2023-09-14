import React, { useEffect, useState } from "react";
import "./foodPage.module.css";
import classes from './foodPage.module.css'
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/Foodservices";
import { useCart } from "../../hooks/useCart";
import StarRating from "../../components/StarRatings/StarRating";
import Tags from "../../components/Tags/Tags";
import Price from "../../components/Price/Price";
import NotFound from "../../components/Not-Fount/NotFound";

export default function FoodPage() {
  const [food, setFood] = useState({});
  const { id } = useParams();
  const { AddtoCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    AddtoCart(food)
    navigate('/cart');
  };

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);
  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? '' : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {food.origins?.map(origin => (
                <span key={origin}>{origin}</span>
              ))}
            </div>

            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map(tag => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>

            <div className={classes.cookTime}>
              <span>
                Time to cook about <strong>{food.cookTime}</strong> minutes
              </span>
            </div>

            <div className={classes.price}>
              <Price price={food.price} />
            </div>

            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
