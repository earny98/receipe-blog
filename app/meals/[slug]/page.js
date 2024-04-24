import React from "react";
import classses from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
// import classes from "./page.module.css";
import DeleteComp from "@/components/meal/deleteComp";

export async function generateMetadata({params}) {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default  function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  
  return (
    <>
      <header className={classses.header}>
        <div className={classses.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classses.headerText}>
          <h1>{meal.title}</h1>
          <p className={classses.creator}>
            {" "}
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classses.summary}>{meal.summary}</p>
        </div>
      </header>

      <main className={classses.main}>
        <p
          className={classses.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
      <DeleteComp />
     
    </>
  );
}
