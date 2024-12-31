import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Something went wrong.</h1>
        <p>{error?.statusText || error?.message || "An unexpected error occurred."}</p>
      </main>
    </>
  );
}

export default ErrorPage;
