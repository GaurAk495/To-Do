import { Link, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setLogInStatus } from "../store/logSlice";

export default function Header({ header }) {
  const loggedStatus = useSelector((store) => store.logStatus.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLogInStatus(false));
    setTimeout(() => {
      navigate("/login", {
        state: { message: "Logout successfully" },
        replace: true,
      });
    }, 1000);
  };
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-5 shadow-xl rounded-b-2xl sticky top-0 z-10">
      <div className="grid grid-cols-3 items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
        >
          <FaTasks className="text-2xl" />
          <span className="font-bold text-lg">TaskApp</span>
        </Link>

        {/* Centered heading */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-sm">
            {header.heading}
          </h1>
          <p className="text-sm text-white/90 mt-1">{header.headerPara}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          {loggedStatus ? (
            <Link
              to="/login"
              className="px-5 py-1.5 bg-red-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              onClick={handleLogout}
            >
              Log Out
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-1.5 bg-white text-purple-600 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-1.5 bg-white text-purple-600 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
