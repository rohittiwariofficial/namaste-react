/***
 * @AboutParcel
 * 
 * HMR - Hot Module Replacement
 * File Watcher Algorithm (Written in C++)
 * BUNDLING 
 * MINIFY
 * Cleaning Our Code
 * Dev and Production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser (add polyfills)
 * Facilitate to enable HTTPS on development (npx parcel index.html --https) 
 * Manage port numbers
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking (Remove Unwanted Code)
 * 
 * 
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "PageHeading", key: "heading1", style: { color: "green" } },
    "Welcome Everyone to Namaste React Session"
  );
  const heading2 = React.createElement(
    "h2",
    { id: "heading2", key: "heading2" },
    "heading 2"
  );

  const container = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container); 