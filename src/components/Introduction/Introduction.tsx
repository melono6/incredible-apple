import React from "react";
import { useDevice } from "../../utils/get-device";
import Grid from "../../utils/Grid";
import Heading from "../Heading/Heading";
import styles from "../Introduction/Introduction.module.scss";

export type IntroductionProps = {
  section: {
    title: string;
    subheading: string;
    copy: string;
    component?: "sectionIntroduction";
  };
};

export const Introduction = ({ section }: IntroductionProps) => {

  const { title, subheading, copy, component } = { ...section };
  const isSectionHeading = component && component === "sectionIntroduction";
  const headingType = isSectionHeading ? "h2" : "h1";
  const device = useDevice();
  const isMobile = device === "mobile";
  return (
    <section className={styles.Wrapper}>
      <Grid row>
        {!isMobile && <Grid column md={1} />}
        <Grid column sm={12} md={8}>
          <div className={styles.CopyWrapper}>
            {title && (
              <Heading content={{ headingType, title, isStandalone: false }} />
            )}
            {subheading && <h4 className={styles.Subheading}>{subheading}</h4>}
            {copy && <p className={styles.Copy}>{copy}</p>}
          </div>
        </Grid>
        {!isMobile && <Grid column md={3} />}
      </Grid>
    </section>
  );
};
export default Introduction;
