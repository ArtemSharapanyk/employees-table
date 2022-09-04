import React from "react";
import { createUniqueReactKey } from "../../../../helpers";

export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const alphabetElements = alphabet.map((letter) => (
  <span key={createUniqueReactKey(letter, "alphabet__colum-title")}>
    {letter}
  </span>
));
