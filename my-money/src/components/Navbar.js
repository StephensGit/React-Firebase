import { Link } from "react-router-dom";

// styles
import styles from "./Navbar.module.css";

import React from "react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to="./Login">Login</Link>
        </li>
        <li>
          <Link to="./Signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
