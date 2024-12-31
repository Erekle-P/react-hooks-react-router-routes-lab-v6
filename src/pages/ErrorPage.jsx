import PropTypes from 'prop-types';
import NavBar from "../components/NavBar";

function ErrorPage({ error }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>{error?.statusText || error?.message || "An unexpected error occurred."}</p>
      </main>
    </>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.shape({
    statusText: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default ErrorPage;
