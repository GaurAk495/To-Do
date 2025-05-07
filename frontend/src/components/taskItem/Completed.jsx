import { Trash2, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const Completed = ({ task, formatDate, onRestore, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="group flex justify-between items-center px-5 py-4 rounded-2xl shadow-md transition-all duration-300 border border-green-200 bg-gradient-to-r from-green-50/50 via-white to-emerald-50/50 hover:shadow-lg backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="text-green-500"
        >
          ✓
        </motion.div>
        <span className="line-through text-green-700 text-base font-medium truncate opacity-70">
          {task.taskname}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-green-600 font-medium line-through opacity-70 w-[140px] text-right">
          {formatDate(task.taskdate)}
        </span>

        <motion.div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onRestore(task._id)}
            className="p-2 rounded-full bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition shadow-sm"
            title="Mark as Pending"
          >
            <RotateCcw size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(task._id)}
            className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition shadow-sm"
            title="Delete"
          >
            <Trash2 size={18} />
          </motion.button>
        </motion.div>
      </div>
    </motion.li>
  );
};

export default Completed;
