import React from "react";
import _ from "lodash";

import { Link, withPrefix, classNames } from "../../utils";
import styleNames from "../../utils/style-names";
import Action from "../Action";
import styles from "./Header.module.scss";

export const Header = props => {
  const { data, page } = props;
  const { stackbit_url_path } = page;
  const { header } = data.config;
  const { logo, has_nav, logo_alt, nav_links, title } = header;

  return (
    <header className={styles["site-header"]}>
      <div className="container container--lg">
        <nav className={styles.navbar} aria-label="Main Navigation">
          <Link className="sr-only" href="#content">
            Skip to main content
          </Link>
          {logo ? (
            <Link className={styles.navbar__logo} href={withPrefix("/")}>
              <img src={withPrefix(logo)} alt={logo_alt} />
            </Link>
          ) : (
            <Link
              className={styleNames(styles, ["navbar__title"], ["h4"])}
              href={withPrefix("/")}
            >
              {title}
            </Link>
          )}
          {has_nav && (
            <>
              <button
                aria-label="Menu"
                className={styleNames(
                  styles,
                  ["navbar__menu-btn"],
                  ["btn", "btn--icon", "btn--clear", "js-nav-toggle"]
                )}
              >
                <svg
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                </svg>
              </button>
              <div className={styles.navbar__menu}>
                <div className={styles.navbar__scroller}>
                  <div className={styles.navbar__inner}>
                    <button
                      aria-label="Close"
                      className={styleNames(
                        styles,
                        ["navbar__close-btn"],
                        ["btn", "btn--icon", "btn--clear", "js-nav-toggle"]
                      )}
                    >
                      <svg
                        className="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
                      </svg>
                    </button>
                    <ul className="navbar__list menu">
                      {nav_links.map((action, action_idx) => {
                        const { url, style } = action;
                        let pageUrl = _.trim(stackbit_url_path, "/");
                        let actionUrl = _.trim(url, "/");
                        return (
                          <li
                            key={action_idx}
                            className={classNames("navbar__item", {
                              "navbar__item--btn": style !== "link",
                              "is-active": pageUrl === actionUrl
                            })}
                          >
                            <Action {...props} action={action} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
