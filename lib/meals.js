import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Loading meals failed')
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const imagePath = `public/images/${fileName}`;
  const stream = fs.createWriteStream(imagePath);

  // Wait for the image to be fully written before continuing
  await new Promise((resolve, reject) => {
    stream.once("open", async () => {
      const bufferedImage = await meal.image.arrayBuffer();
      stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  });

  // Once the image is saved, update the meal object with the image path
  meal.image = `/images/${fileName}`;

  // Insert the meal into the database
  db.prepare(
    `INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )`
  ).run(meal);
}

// export async function deleteMealById() {
//   const id = 8
//   console.log(id)

//   // Execute the DELETE query
//   const result = db.prepare("DELETE FROM meals WHERE id = ?").run(id);
//   console.log(result,"rrrrrrrr")

//   return true;
// }

