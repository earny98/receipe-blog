
import ImagePicker from "@/components/meal/imagePicker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/action";
import MealsFormSubmit from "@/components/meal/mealsFormSubmit";

export default function ShareMealPage() {

  ///different way because if this will be a client comp then this server action will not work.

  // async function shareMeal(formData) {
  //   'use server'
  //   const meal = {
  //     title: formData.get('title'),
  //     summary: formData.get('summary'),
  //     instructions: formData.get('instructions'),
  //     image: formData.get('image'),
  //     creator: formData.get('name'),
  //     creator_email: formData.get('email')
  //   }
  //   console.log(meal,"eeeeeeeeeeee")
  //   // console.log(meal,"eeeeeeeeeeee")

  // }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="your label" name="image" />
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
