import { lazy } from "preact/compat";
import { Outlet } from "@tanstack/router";
import "./app.css";

const TanStackRouterDevtools =
  import.meta.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export function App() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
