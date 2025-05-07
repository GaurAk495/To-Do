import { Link, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setLogInStatus } from "../store/logSlice";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ header }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loggedStatus = useSelector((store) => store.logStatus.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLogInStatus(false));
    setIsMenuOpen(false);
    setTimeout(() => {
      navigate("/login", {
        state: { message: "Logout successfully" },
        replace: true,
      });
    }, 1000);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-4 sm:px-6 py-4 shadow-xl rounded-b-2xl sticky top-0 z-50">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
        >
          <FaTasks className="text-2xl" />
          <span className="font-bold text-lg">TaskApp</span>
        </Link>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-sm">
            {header.heading}
          </h1>
          <p className="text-sm text-white/90 mt-1">{header.headerPara}</p>
        </div>

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

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <FaTasks className="text-xl" />
            <span className="font-bold">TaskApp</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="mt-2 text-center">
          <h1 className="text-xl font-bold tracking-wide drop-shadow-sm">
            {header.heading}
          </h1>
          <p className="text-xs text-white/90 mt-0.5">{header.headerPara}</p>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-2 px-4 pb-4 pt-2 bg-white/10 backdrop-blur-lg border-t border-white/20"
            >
              {loggedStatus ? (
                <button
                  onClick={handleLogout}
                  className="w-full py-2 px-4 bg-red-500 text-white rounded-lg font-medium shadow-md hover:bg-red-600 transition-colors"
                >
                  Log Out
                </button>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-2 px-4 bg-white text-purple-600 rounded-lg font-medium shadow-md hover:bg-gray-50 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-2 px-4 bg-white text-purple-600 rounded-lg font-medium shadow-md hover:bg-gray-50 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
