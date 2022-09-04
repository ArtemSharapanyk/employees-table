import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { createUniqueReactKey } from "../../helpers";
import { appRoutes, RoutesEnum } from "../../routes";

export const AppRouter = () => {
  return (
    <main className="page-container">
      <Routes>
        {appRoutes.map(({ path, component }) => (
          <Route
            path={path}
            element={component}
            key={createUniqueReactKey(path, "route")}
          />
        ))}

        <Route
          path="*"
          element={<Navigate to={RoutesEnum.EMPLOYEES} replace />}
        />
      </Routes>
    </main>
  );
};
