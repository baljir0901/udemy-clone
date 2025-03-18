export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">HelloBrainCode</h1>
        <nav>
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/courses" className="mr-4">
            Courses
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Featured Course</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">My First Course</h3>
          <p>A simple course with 7 lessons.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Enroll Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 HelloBrainCode</p>
      </footer>
    </div>
  );
}
