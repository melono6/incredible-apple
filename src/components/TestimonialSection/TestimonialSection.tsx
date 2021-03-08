import React from "react";

import { htmlToReact, withPrefix } from "../../utils";
import styles from "./TestimonialSection.module.scss";
import styleNames from "../../utils/style-names";

export const TestimonalSection = ({ section }) => {
  const { section_id, title, subtitle, testimonials } = section;
  return (
    <section id={section_id} className={styles.Testimonials}>
      <div className={styles.Inner}>
        {(title || subtitle) && (
          <div className={styles.TitleWrap}>
            {title && <h2 className={styles.Title}>{title}</h2>}
            {subtitle && (
              <p className={styles.SubTitle}>{htmlToReact(subtitle)}</p>
            )}
          </div>
        )}
        {testimonials && (
          <div className="block-content">
            <div className={styles.TestimonialsBlock}>
              {testimonials.map(
                ({ content, avatar, avatar_alt, author }, testimonial_idx) => {
                  return (<div
                    key={testimonial_idx}
                    className={styleNames(styles, [
                      testimonials.length === 1 && "TestimonialContainer--1",
                      testimonials.length === 2 && "TestimonialContainer--2",
                      testimonials.length === 3 && "TestimonialContainer--3",
                    ])}
                  >
                    <blockquote className={styles.Testimonial}>
                      <p className={styles.TestimonialContent}>
                        {htmlToReact(content)}
                      </p>
                      <footer className={styles.TestimonialFooter}>
                        {avatar && (
                          <img
                            className={styles.TestimonialAvatar}
                            src={withPrefix(avatar)}
                            alt={avatar_alt}
                          />
                        )}
                        <cite className={styles.TestimonialAuthor}>
                          {author}
                        </cite>
                      </footer>
                    </blockquote>
                  </div>);
                }
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonalSection;
