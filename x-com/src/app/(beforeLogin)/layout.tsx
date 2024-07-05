import styles from "./page.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
