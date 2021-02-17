import React from "react";
import styles from "./ImageCaption.module.scss";
import Image from "../Image/Image";

export type ImageCaptionProps = {
  Caption: string;
  Copyright: string;
  Image: string;
  Link?: {
    url?: string;
    cached_url?: string;
  };
  _uid: string;
  component: string;
};

export const ImageCaption = ({
  section,
}: {
  section: ImageCaptionProps;
}) => {
  const {
    Caption: caption,
    Copyright: copyright,
    Image: image,
    Link: link,
  } = section;

  const url = link?.cached_url || link?.url;

  return (
    <div className={styles.ImageCaption}>
      <div className={styles.Image}>
        
        {url 
          ? <a href={url}><Image src={image} alt={""} width={325} height={325} desktopWidth={1220} isSmart /></a>
          : <Image src={image} alt={""} width={325} height={325} desktopWidth={1220} isSmart />
        }
      </div>
      <div className={styles.TextContainer}>
        <p className={styles.Caption}>
          {url ? <a href={url}>{caption}</a> : <>{caption}</>}
        </p>
        <p className={styles.Copyright}>{copyright}</p>
      </div>
    </div>
  );
};
export default ImageCaption;
