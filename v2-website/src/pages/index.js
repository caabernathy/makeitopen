/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.css";

const tutorials = [
  {
    content:
      "In this first part, we're going to talk about how we planned the app, and how and why we picked the stack of technologies to use.",
    label: "Part 1",
    title: "Planning The App",
    linkId: "1-1-planning",
  },
  {
    content:
      "We talk about how React Native apps should be, and can be, visually tailored for each platform, rather than being identical everywhere.",
    label: "Part 2",
    title: "Designing an App for Multiple Platforms",
    linkId: "1-2-design",
  },
  {
    content:
      "We explain data flow in React Native, how Redux works within the F8 app, and the simple process of connecting Parse Server.",
    label: "Part 3",
    title: "Integrating Data with React Native",
    linkId: "1-3-data",
  },
  {
    content:
      "Explore how you can use Nuclide, Flow, and Jest with React Native to improve the quality of your code as you're writing it.",
    label: "Part 4",
    title: "Testing a React Native App",
    linkId: "1-4-testing",
  },
];

const appendices = [
  {
    label: "Appendix I",
    title: "Running the App Locally",
    linkId: "1-A1-local-setup",
  },
  {
    label: "Appendix II",
    title: "Using Relay and GraphQL",
    linkId: "1-A2-relay",
  },
  {
    label: "Appendix III",
    title: "Porting the F8 App To Windows",
    linkId: "1-A3-windows",
  },
  {
    label: "Appendix IV",
    title: "Makeitopen in Other Languages",
    linkId: "1-A4-translations",
  },
];

const features = [
  {
    title: "Core",
    items: [
      {
        title: "React",
        link: "http://facebook.github.io/react/",
      },
      {
        title: "React Native",
        link: "http://facebook.github.io/react-native/",
      },
    ],
  },
  {
    title: "Data",
    items: [
      {
        title: "Flux",
        link: "http://facebook.github.io/flux/",
      },
      {
        title: "GraphQL",
        link: "http://graphql.org/",
      },
      {
        title: "Relay",
        link: "http://facebook.github.io/relay/",
      },
      {
        title: "Redux",
        link: "http://redux.js.org/",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Flow",
        link: "http://flowtype.org/",
      },
      {
        title: "Jest",
        link: "http://facebook.github.io/jest/",
      },
      {
        title: "Nuclide",
        link: "http://nuclide.io/",
      },
    ],
  },
  {
    title: "Parse",
    items: [
      {
        title: "Parse Server",
        link: "https://github.com/ParsePlatform/parse-server",
      },
      {
        title: "Parse Dashboard",
        link: "https://github.com/ParsePlatform/parse-dashboard",
      },
    ],
  },
];

const HomeSplash = () => {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useThemeContext();
  return (
    <div
      className={classnames(
        "hero hero--primary text--center",
        styles.heroBanner
      )}
      style={{
        backgroundImage:
          "url('" + useBaseUrl("images/f8_app_splash.png") + "')",
      }}
    >
      <div className={classnames("container", styles.heroBannerFade)}>
        <div className="padding-vert--md">
          <h2 className={classnames("hero__title", styles.heroBannerTagline)}>
            {siteConfig.tagline}
          </h2>
        </div>
        <div>
          <Link
            to={useBaseUrl("docs/1-1-planning")}
            className={classnames(
              "button button--lg button--outline button--primary",
              styles.startReading,
              isDarkTheme ? styles.startReadingDark : styles.startReadingLight
            )}
          >
            Start Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <div className={classnames("container", styles.introContent)}>
      <p>
        Every year, as part of the F8 conference, Facebook builds iOS and
        Android apps that give attendees a schedule for the conference, and let
        them learn more about the talks and speakers. The apps have also
        provided reminders for upcoming talks and ad-hoc announcements to
        attendees.
      </p>

      <p>
        We've released the 2017{" "}
        <a href="https://github.com/fbsamples/f8app/" target="_blank">
          source code on GitHub
        </a>
        , and produced a series of tutorials. These are designed to introduce
        React Native and its Open Source ecosystem in plain English.
      </p>

      <div className={styles.featuredImage}>
        <a href="images/Data_Flow.svg" target="_blank">
          <img src="images/Data_Flow.svg" />
        </a>
        <a href="images/Development_Environment.svg" target="_blank">
          <img src="images/Development_Environment.svg" />
        </a>
      </div>

      <p>
        This tutorial series is typically updated during the app's development.
        Elements, such as code samples, will continue to evolve and improve over
        time after the app has been released. We plan to continue refreshing the
        app and the related tutorials as part of future F8 conferences.
      </p>

      <p>
        Comments and feedback are welcome via{" "}
        <a href="https://github.com/facebook/makeitopen/issues">
          GitHub issues
        </a>
        . The tutorials are designed to be readable individually, but we
        recommend reading through in sequence.
      </p>
    </div>
  );
};

const Tutorials = () => {
  if (!tutorials || tutorials.length == 0) {
    return null;
  }
  const { isDarkTheme } = useThemeContext();
  return (
    <div
      className={classnames(
        styles.blockContent,
        isDarkTheme ? styles.blockContentDark : null
      )}
    >
      <div className="container">
        <div className="row">
          {tutorials.map(({ content, label, title, linkId }, idx) => (
            <div
              key={idx}
              className={classnames("col col--3", styles.tutorialContent)}
            >
              <h4>
                <span>{label}</span>
                <Link to={useBaseUrl("docs/" + linkId)}>{title}</Link>
              </h4>
              <p>{content}</p>
              <p>
                <Link to={useBaseUrl("docs/" + linkId)}>Read More</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Appendices = () => {
  if (!appendices || appendices.length == 0) {
    return null;
  }
  const { isDarkTheme } = useThemeContext();
  return (
    <div
      className={classnames(
        styles.blockContent,
        isDarkTheme ? styles.blockContentDark : null
      )}
    >
      <div className="container">
        <div className="row">
          {appendices.map(({ label, title, linkId }, idx) => (
            <div
              key={idx}
              className={classnames("col col--3", styles.appendixContent)}
            >
              <h4>
                <span>{label}</span>
                <hr />
                <Link to={useBaseUrl("docs/" + linkId)}>{title}</Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Feature = (props) => {
  return (
    <div className={styles.featuredGroup}>
      <h3>{props.feature.title}</h3>
      <ul>
        {props.feature.items.map(({ title, link }, idx) => (
          <li key={idx}>
            <a href={link} target="_blank">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Features = () => {
  return (
    <div className={styles.featureContent}>
      <h2>Featured In This Series</h2>
      <div className={styles.features}>
        {features.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomeSplash />
      <Intro />
      <Tutorials />
      <Appendices />
      <Features />
    </Layout>
  );
};

export default Index;
