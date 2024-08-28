import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nivedhan</h1>
        <p className={styles.description}>
        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        <a href="https://drive.google.com/file/d/1EuLhRLxLG54xr5HuG1a1NzApgV0Z3GAp/view?usp=drivesdk" className={styles.contactBtn}>
          check Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/myProfile.jpeg")}
        alt="Hero image of me"
        className={styles.myProfile}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
