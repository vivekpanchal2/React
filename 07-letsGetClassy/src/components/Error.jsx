import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <div className="error-logo">
        <img src="https://getvectorlogo.com/wp-content/uploads/2020/02/foodex-vector-logo.png" />
      </div>
      <div className="error-status">{err.status + ":" + err.statusText}</div>
      <div className="error-text">
        Sorry, something went wrong on our end. We are currently trying to fix
        the problem.
      </div>
    </div>
  );
};

export default Error;
