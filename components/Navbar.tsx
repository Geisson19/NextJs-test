import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </nav>
  );
};
