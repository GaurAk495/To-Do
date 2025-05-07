import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RefreshHandler({ children }) {
  const loggedStatus = useSelector((store) => store.logStatus.status);
  if (loggedStatus) {
    return <Navigate to="/app" />;
  } else {
    return children;
  }
}

export default RefreshHandler;
