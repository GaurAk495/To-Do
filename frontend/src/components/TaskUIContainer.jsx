import { useEffect, useState } from "react";
import Task from "./Task.jsx";
import TaskAddForm from "./TaskAddForm.jsx";
import TaskSummary from "./TaskSummary.jsx";
import apiClient from "../utils/apiClient.js";
import { handleError, handleSuccess } from "../utils/toastMsg.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, clearAllTasks } from "../store/taskSlice.js";
import { motion } from "framer-motion";
import { Filter, Trash2 } from "lucide-react";

export default function TaskUIContainer() {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasksStore);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasks = await apiClient("/tasks", "GET");
        dispatch(fetchTodos(tasks));
      } catch (err) {
        handleError("Error:", err.message);
      }
    }

    fetchTasks();
  }, []);

  const handleClearAll = async () => {
    if (!tasks.length) {
      handleError("No tasks to clear!");
      return;
    }

    if (
      window.confirm(
        "Are you sure you want to clear all tasks? This cannot be undone!"
      )
    ) {
      try {
        const response = await apiClient("/tasks/tasks-delete", "DELETE");
        if (response.success) {
          dispatch(clearAllTasks([]));
          handleSuccess("All tasks cleared successfully!");
        }
      } catch (err) {
        handleError("Failed to clear tasks. Please try again.");
      }
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-10 h-[100vh] overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
        <section
          id="todo-section"
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl md:col-span-2 flex flex-col overflow-hidden border border-gray-100"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="space-y-4 flex-shrink-0"
          >
            <TaskAddForm />

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 bg-gray-50/80 p-2 rounded-lg flex-1">
                <Filter size={18} className="text-blue-500" />
                <select
                  id="filter"
                  className="flex-1 p-2 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-600"
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                >
                  <option value="all">All Tasks</option>
                  <option value="active">Active Tasks</option>
                  <option value="completed">Completed Tasks</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClearAll}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg transition-colors duration-200 ${
                  tasks.length
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!tasks.length}
              >
                <Trash2 size={18} />
                Clear All
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="overflow-y-auto mt-6 pr-2 flex-1 scroll-smooth"
          >
            <Task filter={filter} />
          </motion.div>
        </section>

        <TaskSummary />
      </div>
    </motion.main>
  );
}
