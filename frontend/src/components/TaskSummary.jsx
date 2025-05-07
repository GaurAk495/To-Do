import { useSelector } from "react-redux";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";

export default function TaskSummary() {
  const tasks = useSelector((store) => store.tasksStore);
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  // Initialize motion value
  const spring = useMotionValue(0);

  // Convert the motion value into degrees for the conic gradient
  const angle = useTransform(spring, [0, 100], [0, 360]);

  // Store angle in state to trigger render
  const [angleDeg, setAngleDeg] = useState(0);

  // Animate spring value when percent changes
  useEffect(() => {
    animate(spring, percent, {
      duration: 0.8,
      type: "spring",
      bounce: 0.2,
    });
  }, [percent, spring]);

  // Watch for angle changes
  useEffect(() => {
    const unsubscribe = angle.on("change", (latest) => {
      setAngleDeg(latest);
    });
    return unsubscribe;
  }, [angle]);

  // Mood message
  const getMood = () => {
    if (percent === 100) return { emoji: "🏆", msg: "You're unstoppable!" };
    if (percent >= 75) return { emoji: "🔥", msg: "Almost there!" };
    if (percent >= 50) return { emoji: "🚀", msg: "Keep it up!" };
    if (percent > 0) return { emoji: "✨", msg: "Getting started!" };
    return { emoji: "📌", msg: "Time to begin!" };
  };

  const { emoji, msg } = getMood();

  return (
    total > 0 && (
      <section className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl sticky top-10 self-start w-full max-w-xs text-center border border-indigo-100 space-y-5">
        <h2 className="text-2xl font-bold text-indigo-700">📊 Task Summary</h2>

        {/* Animated Conic Progress */}
        <motion.div
          className="w-32 h-32 mx-auto rounded-full relative"
          style={{
            background: `conic-gradient(#6366f1 ${angleDeg}deg, #e5e7eb ${angleDeg}deg)`,
          }}
        >
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center text-indigo-700 font-bold text-xl shadow-inner">
            {percent}%
          </div>
        </motion.div>

        {/* Motivational Message */}
        <div className="text-indigo-600 text-lg font-medium flex items-center justify-center gap-2">
          <span className="text-xl">{emoji}</span>
          <span>{msg}</span>
        </div>

        {/* Task Breakdown */}
        <div className="grid grid-cols-3 gap-2 text-sm font-semibold text-gray-700">
          <div className="bg-green-100 text-green-700 rounded-xl p-2 shadow">
            ✅ <br /> {completed}
          </div>
          <div className="bg-red-100 text-red-700 rounded-xl p-2 shadow">
            ❌ <br /> {total - completed}
          </div>
          <div className="bg-indigo-100 text-indigo-700 rounded-xl p-2 shadow">
            📋 <br /> {total}
          </div>
        </div>
      </section>
    )
  );
}
