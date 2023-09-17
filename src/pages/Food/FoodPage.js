import React, { useEffect, useState } from "react";
import "./foodPage.module.css";
import classes from "./foodPage.module.css";
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
    AddtoCart(food);
    navigate("/cart");
  };

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);
  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className="flex justify-center  flex-wrap mt-11 w-full h-full pt-7">
          <img
            className=" w-60 h-72 rounded-2xl object-cover mt-11 ml-8"
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />

          <div className="w-80 flex flex-col ml-4 p-4 rounded-3xl border border-slate-600 border-solid">
            <div className="flex justify-between align-text-bottom">
              <span className="text-xl font-medium mt-4">{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className="flex flex-wrap mt-3">
              {food.origins?.map((origin) => (
                <span className="p-2 text-lg mt-2 ml-2 rounded-3xl bg-red-400" key={origin}>
                  {origin}
                </span>
              ))}
            </div>

            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map((tag) => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>

            <div className="text-red-400">
              <span>
                Time to cook about <strong className="underline underline-offset-4 text-red-700">{food.cooktime}</strong> minutes
              </span>
            </div>

            <div className="text-base mb-1 text-green-600 ml-5 ">
              <Price price={food.price}  />
            </div>

            <button className="bg-green-800 text-white px-3 py-3 rounded-3xl hover:bg-green-600" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
