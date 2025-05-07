import React, { useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../utils/toastMsg.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogInStatus } from "../store/logSlice.js";
import apiClient from "../utils/apiClient.js";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginPage = {
    heading: "Login to To-Do App",
    headerPara: "Please enter your credentials to continue",
  };

  useEffect(() => {
    if (location.state?.message) {
      handleSuccess(location.state.message);

      navigate(location.pathname, { replace: true });
    }
  }, [location.state?.message, location.pathname, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formObj = Object.fromEntries(form);
    const { email, password } = formObj;

    try {
      const data = await apiClient("/api/auth/login", "POST", {
        email,
        password,
      });
      const { success, message, error, token } = data;
      console.log(data);
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        dispatch(setLogInStatus(true));
        setTimeout(() => {
          navigate("/app", { state: { message: "Log In Successfully" } });
        }, 1500);
      } else if (error) {
        handleError(error || message || "login failed");
      }
    } catch (err) {
      handleError(err.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <Header header={loginPage} />
      <main className="max-w-md mx-auto px-4 py-10">
        <section
          id="login-section"
          className="bg-white p-6 rounded-2xl shadow space-y-6"
        >
          <form id="login-form" className="space-y-4" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="new-email" className="block font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="new-email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="new-email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="new-password" className="block font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                id="new-password"
                name="password"
                placeholder="Enter your password"
                required
                autoComplete="new-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-blue-600"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="text-center space-y-1 text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
            <p>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
