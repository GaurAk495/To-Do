import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { ToastContainer, toast } from "react-toastify";
import TaskUIContainer from "../components/TaskUIContainer.jsx";
import { useLocation } from "react-router-dom";
import { handleSuccess } from "../utils/toastMsg.js";
import { useEffect } from "react";

export default function DashBoard() {
  const HomePage = {
    heading: "📝 My To-Do List",
    headerPara: "Stay organized and boost productivity!",
  };
  const location = useLocation();
  useEffect(() => {
    if (location.state?.message) {
      handleSuccess(location.state?.message);
    }
  }, [location.state?.message]);
  return (
    <>
      <ToastContainer />
      <Header header={HomePage} />
      <TaskUIContainer />
      <Footer />
    </>
  );
}
