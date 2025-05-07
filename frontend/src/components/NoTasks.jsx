import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import quotes from "../quote";

const NoTasks = ({ message = "No tasks available!", filter }) => {
  const [randomQuote, setRandomQuote] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const qArray = quotes.map((Qs) => Qs.q);
    setRandomQuote(qArray[Math.floor(Math.random() * quotes.length)]);
    setIsAnimating(true);
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const emojis = ["🚀", "✨", "🧠"];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center mt-16 p-8 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 shadow-lg border border-white/50 backdrop-blur-sm"
    >
      <motion.div
        className="flex gap-3 mb-6"
        animate={
          isAnimating
            ? {
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        {emojis.map((emoji, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="text-4xl"
            style={{ display: "inline-block" }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
      >
        {message}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-gray-600 mb-6 max-w-md leading-relaxed"
      >
        {randomQuote}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-6 text-sm text-gray-500 bg-white/50 px-4 py-2 rounded-full"
      >
        Let's make progress together! 💪
      </motion.div>
    </motion.div>
  );
};

export default NoTasks;
