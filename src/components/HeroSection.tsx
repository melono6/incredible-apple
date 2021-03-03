import React from "react";

import { classNames, toStyleObj, withPrefix } from "../utils";
import SectionActions from "./SectionActions";

export const HeroSection = props => {
  const { section } = props;
  const {
    background,
    has_background,
    title,
    subtitle,
    actions,
    image,
    image_alt,
    image_position,
    align
  } = section;

  const {
    background_color,
    background_image,
    background_image_opacity: background_opacity_pct,
    background_image_size: background_size,
    background_image_repeat: background_repeat
  } = background;

  const background_opacity = background_opacity_pct * 0.01;

  return (
    <section
      className={classNames("section", "hero", {
        "bg-image": has_background && background_image,
        "inverse bg-blue": has_background && background_color === "blue",
        "bg-gray": has_background && background_color === "gray",
        "section--padding": has_background || image
      })}
    >
      {has_background && background_image && (
        <div
          className="bg-image__image"
          style={toStyleObj(
            "background-image: url('" +
              withPrefix(background_image) +
              "'); opacity: " +
              background_opacity +
              "; background-size: " +
              background_size +
              "; background-repeat: " +
              background_repeat
          )}
        />
      )}
      <div className="container container--lg">
        <div
          className={classNames(
            "flex",
            "flex--middle",
            "flex--center",
            "flex--col-2",
            {
              "align-center": align === "center",
              "align-right": align === "right"
            }
          )}
        >
          {image && (
            <div
              className={classNames("cell", "section__media", {
                "section__media--right": image_position === "right"
              })}
            >
              <img src={withPrefix(image)} alt={image_alt} />
            </div>
          )}
          <div className="cell section__body">
            {title && <h1 className="section__title">{title}</h1>}
            {subtitle && (
              <div className="section__copy">
                <p>{subtitle}</p>
              </div>
            )}
            {actions && (
              <div className="section__actions btn-group">
                <SectionActions {...props} actions={actions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
