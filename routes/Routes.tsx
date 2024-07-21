// src/routes/Routes.tsx

import { createBrowserRouter } from "react-router-dom";
import DashboardIndex from "../features/dashboard";
import App from "../App";
import DentalIndex from "../features/dentalOPG";
import UseMemo from "../features/session/UseMemo";

const Routes = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      { path: "", element: <DashboardIndex /> }, // Remove the leading slash
      { path: "report", element: <DentalIndex /> },
    ]
  },
  {
    path: "session",
    element: <UseMemo />,
  }
]);

export default Routes;
