import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ loggedStatus, children }) {
  if (!loggedStatus) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
