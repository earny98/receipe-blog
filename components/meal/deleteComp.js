// "use client"
import React from 'react'
import Link from "next/link";
import classes from "./deleteComp.module.css";
// import { useRouter } from 'next/navigation';
import {deleteMealById} from "@/lib/meals";

const DeleteComp = () => {
//   const router = useRouter();
//   const handleDelete = async () => {
//     // try {
//     //   // Call deleteMealById function to delete the meal
//     //   await deleteMealById(meal.id);
//     //   // Redirect user to meals page after successful deletion
//     //   router.push('/meals');
//     // } catch (error) {
//     //   console.error('Error deleting meal:', error.message);
//     //   // Handle error, such as displaying an error message to the user
//     // }
//   };
  return (
    <div className={classes.actions}>
    <Link href={`/meals`}>Back</Link>
    <span className={classes.separator}></span>
    <Link href={`/meals`}>Delete</Link>

    {/* <Link href={`/meals`} onClick={handleDelete}>Delete</Link> */}
  </div>
  )
}

export default DeleteComp