import React, { useState } from "react";
import MyDatePicker from "../MyDatePicker";
import { Trash2, Pencil, Save, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pending({ task, method }) {
  const [name, setName] = useState(task.taskname);
  const [date, setDate] = useState(task.taskdate);
  const [isEditing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    method.handleOnEditSave(task._id, name, date);
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`group flex flex-col sm:flex-row sm:items-center gap-4 px-4 sm:px-5 py-4 rounded-2xl shadow-md transition-all duration-300 border ${
        isEditing
          ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 ring-2 ring-blue-300"
          : "hover:shadow-lg bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-200"
      }`}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <input
            type="checkbox"
            onClick={() => method.toggleComplete(task._id)}
            className="w-5 h-5 accent-green-500 cursor-pointer shrink-0"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800"
              placeholder="Edit task..."
            />
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-base text-gray-800 truncate"
            >
              {name}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pl-9 sm:pl-0">
        <div
          className={`w-full sm:w-40 transition-opacity ${
            !isEditing && "opacity-60"
          }`}
        >
          <MyDatePicker date={date} setDate={setDate} />
        </div>

        <motion.div className="flex gap-2 w-full sm:w-auto justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={isEditing ? handleSave : () => setEditing(true)}
            className={`p-2 rounded-full transition shadow-sm ${
              isEditing
                ? "bg-green-100 text-green-600 hover:bg-green-200"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
            title={isEditing ? "Save" : "Edit"}
          >
            {isEditing ? <Save size={18} /> : <Pencil size={18} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => method.handleOnDelete(task._id)}
            className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition shadow-sm"
            title="Delete"
          >
            <Trash2 size={18} />
          </motion.button>
        </motion.div>
      </div>
    </motion.li>
  );
}
