import { Link } from "react-router-dom";

const RouteLink = ({ children, to }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      {children}
    </Link>
  );
};

export default RouteLink;
