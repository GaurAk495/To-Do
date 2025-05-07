import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center text-white px-4 text-center">
      {/* Cartoon Meme Image */}
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Confused meme"
        className="w-40 h-40 mb-6 animate-wiggle"
      />

      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-400 drop-shadow-md">
        404 - Page Lost in Memes
      </h2>

      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        Either you typed something wrong, or this page just doesn't exist
        anymore.
      </p>

      <Link
        to="/"
        className="inline-block px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 transition-all duration-300 shadow-lg transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
}
