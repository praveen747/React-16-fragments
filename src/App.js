import React from "react";
import "./styles.css";

export default function App() {
  return [
    "Writing React-16: Fragmenets",
    <h2 key="heading-1"> Fragments Feature</h2>,
    "Returning an Array of Elements from a components render Method",
    <h2 key="heading-2"> Rules to achieve this</h2>,
    "Children in an array must be separated by commas",
    "Children in an array must have a key to prevent React’s key warning.",
    "Strings must be wrapped in quotes."
  ];
}
