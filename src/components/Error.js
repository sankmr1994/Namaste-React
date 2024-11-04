import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went worng!</h2>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
