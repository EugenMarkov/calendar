import { Navigate, Route, Routes } from "react-router-dom";
import { MainContent } from "../components/MainContent";
import { NOT_FOUND_ROUTE_PATH } from "./router-consts.js";
import { ROUTER_PATHS } from "./router-paths.js";
import { CalendarPage } from "../pages/CalendarPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HomePage } from "../pages/HomePage";

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainContent />}>
        <Route path="/" element={<Navigate to={ROUTER_PATHS.calendar} />} />
        <Route path={ROUTER_PATHS.home} element={<HomePage />} />
        <Route path={ROUTER_PATHS.calendar} element={<CalendarPage />} />
        <Route path={ROUTER_PATHS.not_found} element={<NotFoundPage />} />
        <Route path={NOT_FOUND_ROUTE_PATH} element={<Navigate to="/not_found" />} />
      </Route>
    </Routes>
  );
}
