"use client";

import { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  const handelPinkClick = () => {
    imageInput.current.click();
  };

  // input의 이벤트가 바뀔때 마다 실행하도록
  const handelImageChange = (e) => {
    // 한개만, 여러개인 배열임,속성 multiple사용
    const file = e.target.files[0];

    //  이미지가 선택되지 않은 경우 미리보기도니 이미지를 재설정
    if (!file) {
      setPickedImage(null);
      return;
    }

    // 미리보기:Data URL을 변환, 이미지 요소값으로 소스로 사용할 수 있음
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //Data URL 형태로 변환
    fileReader.onload = () => {
      // 변환된 데이터 결과가져오기
      setPickedImage(fileReader.result);
    };
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="the image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handelImageChange}
          required
        />
        <button
          onClick={handelPinkClick}
          className={classes.button}
          type="button"
        >
          Pick on Image
        </button>
      </div>
    </div>
  );
}
