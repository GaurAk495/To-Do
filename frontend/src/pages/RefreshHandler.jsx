import { Navigate } from "react-router-dom";

function RefreshHandler({ loggedStatus, children }) {
  if (loggedStatus) {
    return <Navigate to="/app" />;
  } else {
    return children;
  }
}

export default RefreshHandler;
