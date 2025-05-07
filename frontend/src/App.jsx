import DashBoard from "./pages/DashBoard.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute .jsx";
import NotFound from "./pages/NotFound.jsx";
import RefreshHandler from "./pages/RefreshHandler.jsx";
import { useEffect } from "react";
import { isAuthenticated } from "./utils/authenticated.js";
import { useDispatch } from "react-redux";
import { setLogInStatus } from "./store/logSlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function authCheck() {
      const result = await isAuthenticated();
      if (result) {
        dispatch(setLogInStatus(true));
      }
    }
    authCheck();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<RefreshHandler children={<Login />} />}
        />
        <Route
          path="/signup"
          element={<RefreshHandler children={<SignUp />} />}
        />
        <Route
          path="/app"
          element={<ProtectedRoute children={<DashBoard />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
