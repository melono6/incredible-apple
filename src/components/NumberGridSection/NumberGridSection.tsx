import React from "react";

import { htmlToReact, withPrefix } from "../../utils";
import styles from "./NumberGridSection.module.scss";
import styleNames from "../../utils/style-names";

export const NumberGridSection = ({ section }) => {
  const { section_id, title, subtitle, gridItems, columns } = section;

  return (
    <section id={section_id} className={styles.NumberGrid}>
      <div className={styles.Inner}>
        {(title || subtitle) && (
          <div className={styles.TitleWrap}>
            {title && <h2 className={styles.Title}>{title}</h2>}
            {subtitle && (
              <p className={styles.SubTitle}>{htmlToReact(subtitle)}</p>
            )}
          </div>
        )}
        {gridItems && (
          <div className="block-content">
            <div className={styles.GridBlock}>
              {gridItems.map(
                ({ title, content }, grid_idx) => {
                  return (
                    <div className={styleNames(styles, [
                      "GridItem",
                      columns === "two" && "GridItem--2",
                      columns === "three" && "GridItem--3",
                    ])}>
                      <span className={styles.GridItem__Counter} aria-hidden="true">
                        {grid_idx + 1}.
                      </span>
                      <h3 className={styles.GridItem__Title}>
                        {title}
                      </h3>
                      <div className={styles.GridItem__Content}>
                        {htmlToReact(content)}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NumberGridSection;
