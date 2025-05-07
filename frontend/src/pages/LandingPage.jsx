import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart2, Shield } from "lucide-react";

export default function LandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
          {/* Animated background pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 60%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📝 Task Master Pro
            </motion.h1>

            <motion.p
              {...fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100"
            >
              Transform your productivity with our intelligent task management
              system.
              <span className="block mt-2 text-blue-200">
                Simple. Powerful. Beautiful.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Link
                to="/signup"
                className="group relative inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:bg-blue-500/30 transition-all duration-300"
              >
                Login to Continue
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center justify-center gap-8 text-blue-200"
            >
              <span>🚀 5000+ Users</span>
              <span>⭐ 4.9/5 Rating</span>
              <span>🏆 Best of 2025</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Task Master Pro?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Effortless Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intuitive interface for quick task creation and organization.
                  Stay focused on what matters most.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <BarChart2 className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Smart Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Track your progress with beautiful visualizations and
                  real-time productivity insights.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with industry-leading encryption. Focus
                  on tasks, not worries.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="text-center">
            <motion.p className="text-gray-600" whileHover={{ scale: 1.05 }}>
              © 2025 Task Master Pro by Akhilesh 💻 | Crafted with ❤️ for
              productivity
            </motion.p>
          </div>
        </footer>
      </div>
    </>
  );
}
