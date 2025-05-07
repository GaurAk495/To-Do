import { useSelector } from "react-redux";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";

export default function TaskSummary() {
  const tasks = useSelector((store) => store.tasksStore);
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const spring = useMotionValue(0);
  const angle = useTransform(spring, [0, 100], [0, 360]);
  const [angleDeg, setAngleDeg] = useState(0);

  useEffect(() => {
    animate(spring, percent, {
      duration: 0.8,
      type: "spring",
      bounce: 0.2,
    });
  }, [percent, spring]);

  useEffect(() => {
    const unsubscribe = angle.on("change", (latest) => {
      setAngleDeg(latest);
    });
    return unsubscribe;
  }, [angle]);

  const getMood = () => {
    if (percent === 100) return { emoji: "🏆", msg: "You're unstoppable!" };
    if (percent >= 75) return { emoji: "🔥", msg: "Almost there!" };
    if (percent >= 50) return { emoji: "🚀", msg: "Keep it up!" };
    if (percent > 0) return { emoji: "✨", msg: "Getting started!" };
    return { emoji: "📌", msg: "Time to begin!" };
  };

  const { emoji, msg } = getMood();

  if (!total) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-xl w-full max-w-xs mx-auto text-center border border-indigo-100 space-y-4"
    >
      <motion.h2
        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Task Overview
      </motion.h2>

      <div className="relative">
        <motion.div
          className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full relative"
          style={{
            background: `conic-gradient(#6366f1 ${angleDeg}deg, #e5e7eb ${angleDeg}deg)`,
          }}
        >
          <motion.div
            className="absolute inset-2 sm:inset-3 bg-white rounded-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="text-2xl sm:text-3xl font-bold text-indigo-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {percent}%
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-indigo-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl sm:text-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {emoji}
        </motion.span>
        <span>{msg}</span>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 gap-2 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100 shadow-sm"
        >
          <div className="text-green-600 font-semibold">Done</div>
          <div className="text-xl font-bold text-green-700">{completed}</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-red-100 shadow-sm"
        >
          <div className="text-red-600 font-semibold">Left</div>
          <div className="text-xl font-bold text-red-700">
            {total - completed}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-sm"
        >
          <div className="text-indigo-600 font-semibold">Total</div>
          <div className="text-xl font-bold text-indigo-700">{total}</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
