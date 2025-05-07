import React from "react";
import Header from "../components/Header.jsx";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../utils/toastMsg.js";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../utils/apiClient.js";

export default function SignUp() {
  const SignUpPage = {
    heading: "📝 Create an Account",
    headerPara: "Sign up to get started with your To-Do List",
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formObj = Object.fromEntries(form);

    const {
      username,
      email,
      password,
      "confirm-password": confirmPassword,
    } = formObj;
    const termsChecked = e.target.querySelector("#terms").checked;

    if (username.length < 3) {
      return handleError("Username must be at least 3 characters long");
    }
    if (username.length > 30) {
      return handleError("Username cannot exceed 30 characters");
    }

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      return handleError("Username must contain only letters and numbers");
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/;
    if (!passwordRegex.test(password)) {
      return handleError(
        "Password must include uppercase, lowercase, number, and special character"
      );
    }
    if (!email.trim()) {
      return handleError("Email is required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return handleError("Invalid email format");
    }
    if (password !== confirmPassword) {
      return handleError("Passwords do not match");
    }

    if (!termsChecked) {
      return handleError("You must accept the terms and conditions");
    }

    try {
      const data = await apiClient("/api/auth/signup", "POST", {
        username,
        email,
        password,
      });
      const { success, message, error } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (error) {
        handleError(error || message || "Signup failed");
      }
    } catch (err) {
      handleError(err.message);
    }
  };
  return (
    <>
      <Header header={SignUpPage} />
      <main className="h-[calc(100vh_-156px)] px-5 max-w-md py-4 mx-auto">
        <section
          id="signup-section"
          className="bg-white rounded-2xl shadow space-y-6 px-4 py-5"
        >
          <form
            id="signup-form"
            className="space-y-4"
            onSubmit={handleOnSubmit}
            autoComplete="off"
          >
            <div>
              <label htmlFor="username" className="block font-medium mb-1">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose a username"
                required
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="new-email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
                autoComplete="new-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block font-medium mb-1"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                id="terms"
                autoComplete="off"
                className="accent-blue-600 mt-1"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Login here
            </Link>
          </p>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}
