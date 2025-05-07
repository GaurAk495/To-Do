import { Trash2, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const Completed = ({ task, formatDate, onRestore, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex flex-col sm:flex-row sm:items-center gap-4 px-4 sm:px-5 py-4 rounded-2xl shadow-md transition-all duration-300 border border-green-200 bg-gradient-to-r from-green-50 via-white to-green-50 hover:shadow-lg group"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="line-through text-green-700 text-base font-medium truncate">
          ✅ {task.taskname}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pl-6 sm:pl-0">
        <span className="text-sm text-green-600 font-medium line-through sm:w-40 w-full">
          {formatDate(task.taskdate)}
        </span>

        <div className="flex gap-2 w-full sm:w-auto justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onRestore(task._id)}
            className="p-2 rounded-full bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
            title="Mark as Pending"
          >
            <RotateCcw size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(task._id)}
            className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
            title="Delete"
          >
            <Trash2 size={18} />
          </motion.button>
        </div>
      </div>
    </motion.li>
  );
};

export default Completed;
