"use client";
import style from "./signup.module.css";
import BackButton from "./BackButton";
import { onSubmit } from "../_lib/signup";
import { useFormState, useFormStatus } from "react-dom";
// ref: https://pl.react.dev/reference/react-dom/hooks/useFormState

function showMessage(massage: string | null | undefined) {
  if (massage === "no_id") {
    return "아이디를 입력하세요.";
  }
  if (massage === "no_name") {
    return "닉네임을 입력하세요.";
  }
  if (massage === "no_password") {
    return "비밀번호를 입력하세요.";
  }
  if (massage === "no_image") {
    return "이미지를 업로드하세요.";
  }
  if (massage === "user_exists") {
    return "이미 사용 중인 아이디입니다.";
  }
  return "";
}
export default function SignupModal() {
  const [state, formAction] = useFormState(onSubmit, null);
  const { pending } = useFormStatus();

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={style.input}
                  type="text"
                  placeholder=""
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  className={style.input}
                  type="text"
                  placeholder=""
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  className={style.input}
                  type="password"
                  placeholder=""
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  name="image"
                  className={style.input}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button className={style.actionButton} disabled={pending}>
                가입하기
              </button>
              <div className={style.error}>{showMessage(state?.message)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
