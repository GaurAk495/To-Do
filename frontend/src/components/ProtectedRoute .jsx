import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const loggedStatus = useSelector((store) => store.logStatus.status);
  if (!loggedStatus) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
