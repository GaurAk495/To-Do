import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { handleError, handleSuccess } from "../utils/toastMsg";
import apiClient from "../utils/apiClient";
import { useDispatch } from "react-redux";
import { addTaskItem } from "../store/taskSlice";
import MyDatePicker from "./MyDatePicker";

export default function TaskAddForm() {
  const dispatch = useDispatch();
  const [taskDate, setTaskDate] = useState(new Date());

  const addTask = async ({ taskname, taskdate }) => {
    try {
      const data = await apiClient("/tasks", "POST", { taskname, taskdate });
      const { success, message, error, toDoItem } = data;
      if (success) {
        dispatch(addTaskItem(toDoItem));
        handleSuccess(message);
      } else if (error) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
      console.log(err);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      id="todo-form"
      className="p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const taskname = formData.get("taskname");
        addTask({ taskname, taskdate: taskDate });
        e.target.reset();
        setTaskDate(new Date());
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            id="todo-input"
            name="taskname"
            placeholder="What needs to be done? 🤔"
            required
            className="w-full p-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/70 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
          />
          <motion.span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          >
            ✨
          </motion.span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-48">
            <MyDatePicker date={taskDate} setDate={setTaskDate} />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:w-auto w-full"
          >
            <Plus size={20} />
            <span>Add Task</span>
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
}
