import React, { Suspense } from "react";

import classes from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meal/mealGrid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browser the delicious meals shared by our vibrant community.",
};
// alternative of the below server action and also file name of loading has change 
async function Meals(){
  const meals = await getMeals();
  return(
    <MealGrid  meals={meals} />
  )
}
export default async function MealPage() {
  // const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>

        <p>
          Choose your favroute recipie and cook its yourself.It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favrouite Recipie</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* <MealGrid meals={meals} /> */}
        <Suspense fallback={<h1 className={classes.loading}>Feacthing Meals....</h1>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
