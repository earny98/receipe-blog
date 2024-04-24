"use client";
import classes from "./imagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();

  //when we click on custom button this function should be trigger
  const ImageInput = useRef();
  function handlePickClick() {
    ImageInput.current.click();
  }

  /////function to change
  function HandleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picker yet.</p>}
          {pickImage && <Image src={pickImage} alt="Image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInput}
          onChange={HandleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
