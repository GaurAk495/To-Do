export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          📝 Organize Your Day with Ease
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Simple. Fast. Powerful. Manage your tasks efficiently and stay
          productive!
        </p>
        <div className="space-x-4">
          <a
            href="/signup"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="border border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            Login
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Our To-Do App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              ✅ Easy Task Management
            </h3>
            <p>
              Quickly add, edit, filter, and delete your daily tasks with an
              intuitive interface.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">📊 Real-Time Summary</h3>
            <p>
              Get instant feedback on your progress with completed and pending
              task stats.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure & Private</h3>
            <p>
              Your data is protected with modern security standards and never
              shared.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <p>© 2025 To-Do App by Akhilesh 💻. All rights reserved.</p>
      </footer>
    </div>
  );
}
