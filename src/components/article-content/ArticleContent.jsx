// ArticleContent.jsx
import React from "react";
import styles from "./ArticleContent.module.scss";
import { SlideUp } from "@/components/animations";

export function ArticleContent({ item }) {
  return (
    <SlideUp>
      <div className={styles.contentContainer}>
        <div className={styles.title}>{item.question}</div>
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </SlideUp>
  );
}