"use client";

import { useActionState } from "react";

import { shareMeal } from "@/lib/actions";

import ImagePicker from "@/components/meals/ImagePicker";
import classes from "./page.module.css";
import FormSubmit from "@/components/meals/FormSubmit";

export default function ShareMealPage() {
  // 첫번째인수: form이 제출될 때 동작하는 서버액션, 두번쨰: 초기값
  const [state, formAction] = useActionState(shareMeal, {
    message: null,
  });
  console.log(state);
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
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
          <ImagePicker name={"image"} label={"your image"} />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <FormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
