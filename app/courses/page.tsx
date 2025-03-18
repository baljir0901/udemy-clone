import { client } from "../../lib/sanity";

async function getLessons() {
  const query = '*[_type == "lesson"]';
  const lessons = await client.fetch(query);
  return lessons;
}

export default async function Courses() {
  const lessons = await getLessons();

  return (
    <div className="min-h-screen bg-gray-100">
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
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          My First Course
        </h2>
        <div className="grid gap-6">
          {lessons.map((lesson: any) => (
            <div
              key={lesson._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {lesson.title}
              </h3>
              <p className="text-gray-600 mt-2">{lesson.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 HelloBrainCode</p>
      </footer>
    </div>
  );
}
