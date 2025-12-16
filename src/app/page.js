//import Nav from "@/components/Nav";  // works if @ points to src/
import Nav from "./Components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-6 py-32">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Welcome to Trip Planner Tours & Travel
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg text-center mb-10">
          Plan your trips easily, explore destinations, and manage your travel itinerary.
        </p>
        <div className="flex gap-4">
          <a
            href="/services"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </main>
    </>
  );
}
