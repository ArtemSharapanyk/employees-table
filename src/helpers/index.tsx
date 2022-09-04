import React, { FC, Suspense } from "react";

export const createUniqueReactKey = (key: string, nameOfKey: string) =>
  `${key}__${nameOfKey}`;

export const withSuspense = (Componet: FC) => (
  <Suspense fallback={<span>load...</span>}>
    <Componet />
  </Suspense>
);
