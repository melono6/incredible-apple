import React from "react";

import { htmlToReact, withPrefix } from "../../utils";
import styles from "./CardSection.module.scss";
import styleNames from "../../utils/style-names";

export const CardSection = ({ section }) => {
  const { section_id, title, subtitle, cards } = section;

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
        {cards && (
          <div className="block-content">
            <div className={styles.CardBlock}>
              {cards.map(({ title, content, cta_alt, icon, icon_alt }, grid_idx) => {
                return (
                  <div key={grid_idx} className={styles.CardContainer}>
                    <div className={styles.Card}>
                      <div className={styles.CardInner}>
                        <div>
                          <div className={styles.Icon}>
                            <img
                              src={withPrefix(icon)}
                              alt={icon_alt}
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <h3>{title}</h3>
                            <div>
                              <p>
                                {content}
                              </p>
                            </div>
                            <div className={styles.CtaContainer}>
                              <a
                                className="btn btn--icon btn--clear"
                                href="/style-guide/"
                              >
                                <svg className={styles.CtaIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l-1.762 1.763 6.975 6.988h-15.212v2.5h15.212l-6.975 6.988 1.763 1.762 10-10z"></path></svg>
                                <span className="sr-only">{cta_alt}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardSection;
