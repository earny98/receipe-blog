import MealItem from "./mealIteam";
import classes from "./mealgrid.module.css";
import React from "react";
export default function MealGrid({ meals }) {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
