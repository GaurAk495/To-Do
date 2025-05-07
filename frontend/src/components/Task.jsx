import React from "react";
import Pending from "./taskItem/Pending";
import Completed from "./taskItem/Completed";
import { handleError, handleSuccess } from "../utils/toastMsg";
import apiClient from "../utils/apiClient";
import NoTasks from "./NoTasks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask, patch, update } from "../store/taskSlice";
import { AnimatePresence } from "framer-motion";

export default function Task({ filter }) {
  const tasks = useSelector((store) => store.tasksStore);
  const dispatch = useDispatch();

  const pendingTasks = tasks?.filter((task) => !task.completed);
  const completedTasks = tasks?.filter((task) => task.completed);

  function formatDate(isoString) {
    const date = new Date(isoString);
    const options = { weekday: "long", day: "numeric", month: "long" };
    const formatted = date.toLocaleDateString("en-US", options);
    const [weekday, month, day] = formatted.replace(",", "").split(" ");
    return `${weekday}, ${day} ${month}`;
  }

  async function handleOnDelete(taskId) {
    try {
      const data = await apiClient("/tasks", "DELETE", { taskId });
      const { success, message, error } = data;
      if (success) {
        handleSuccess("Task Deleted Successfully");
        dispatch(deleteTask({ deleteTaskId: data.taskId }));
      } else if (error) {
        console.log(message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleOnEditSave(taskId, taskname, taskdate) {
    try {
      const data = await apiClient("/tasks", "PUT", {
        taskId,
        taskname,
        taskdate,
      });
      const { success, message, error } = data;
      if (success) {
        dispatch(update(data.task));
      } else if (error) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  }

  async function toggleComplete(taskId) {
    try {
      const data = await apiClient("/tasks", "PATCH", { taskId });
      const { success, message, error } = data;
      if (success) {
        dispatch(patch(data.task));
      } else if (error) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (
    tasks &&
    (tasks.length === 0 ? (
      <NoTasks
        message="No tasks available! Time to get productive 💪"
        filter={filter}
      />
    ) : (
      <div className="space-y-10">
        {(filter === "active" || filter === "all") && (
          <>
            <h2 className="text-lg font-semibold mb-4 text-blue-600 flex items-center gap-2">
              <span className="relative">
                📋
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {pendingTasks.length}
                </span>
              </span>
              Pending Tasks
            </h2>
            {pendingTasks.length > 0 ? (
              <AnimatePresence mode="popLayout">
                <ul className="space-y-3">
                  {pendingTasks.map((task) => (
                    <Pending
                      key={task._id}
                      task={task}
                      method={{
                        formatDate,
                        toggleComplete,
                        handleOnEditSave,
                        handleOnDelete,
                      }}
                    />
                  ))}
                </ul>
              </AnimatePresence>
            ) : completedTasks.length > 0 ? (
              <NoTasks
                message="All tasks completed! 🎉 You're crushing it!"
                filter={filter}
              />
            ) : (
              <NoTasks
                message="No pending tasks! Add something awesome."
                filter={filter}
              />
            )}
          </>
        )}

        {(filter === "completed" || filter === "all") && (
          <div className="pt-4 border-t">
            <h2 className="text-lg font-semibold mb-4 text-green-600 flex items-center gap-2">
              <span className="relative">
                ✅
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {completedTasks.length}
                </span>
              </span>
              Completed Tasks
            </h2>
            {completedTasks.length > 0 ? (
              <AnimatePresence mode="popLayout">
                <ul className="space-y-3">
                  {completedTasks.map((task) => (
                    <Completed
                      key={task._id}
                      task={task}
                      formatDate={formatDate}
                      onRestore={toggleComplete}
                      onDelete={handleOnDelete}
                    />
                  ))}
                </ul>
              </AnimatePresence>
            ) : pendingTasks.length > 0 ? (
              <NoTasks
                message="No completed tasks yet. Start finishing some!"
                filter={filter}
              />
            ) : (
              <NoTasks message="Nothing completed yet!" filter={filter} />
            )}
          </div>
        )}
      </div>
    ))
  );
}
