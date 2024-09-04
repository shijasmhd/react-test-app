import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const errorObj = useRouteError();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-heading">Oops!!</h1>
        <h1 className="error-code">{errorObj.status + ' - ' + errorObj.statusText}</h1>
        <Link to={'/'} className="btn-home-err">Take Me Home</Link>
      </div>
    </div>
  );

}

export default ErrorPage;