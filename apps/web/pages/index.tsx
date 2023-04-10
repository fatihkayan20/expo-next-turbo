import { Button } from "ui";
import * as React from "react";

import styles from "../styles/index.module.css";

export default function Web(): React.ReactNode {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button text="Boop" />
    </div>
  );
}
