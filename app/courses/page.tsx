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
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">My First Course</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Lessons</h3>
          <ul>
            {lessons.map((lesson: any) => (
              <li key={lesson._id} className="my-2">
                <strong>{lesson.title}</strong>: {lesson.description}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 HelloBrainCode</p>
      </footer>
    </div>
  );
}
