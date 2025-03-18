// Define the Course type for TypeScript
type Course = {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string;
};

export default function Home() {
  const courses: Course[] = [
    {
      id: 1,
      title: "Full Stack Web Development Course",
      duration: "10 months",
      price: "¥200,000",
      description:
        "Learn HTML, CSS, JavaScript, React, Next.js, Node.js, databases, and AWS. Build a real project.",
    },
    {
      id: 2,
      title: "Cybersecurity Course",
      duration: "6 months",
      price: "¥180,000",
      description:
        "Master networking, Linux security, hacking tools, cloud security, and practical exercises.",
    },
    {
      id: 3,
      title: "Data Scientist Course",
      duration: "8 months",
      price: "¥180,000",
      description:
        "Explore Python, machine learning, deep learning, big data, and build an AI model.",
    },
    {
      id: 4,
      title: "React Web Development Course",
      duration: "6 months",
      price: "¥100,000",
      description:
        "Develop with React, TypeScript, Next.js, and full-stack tools. Launch a project.",
    },
    {
      id: 5,
      title: "Python Programming Course",
      duration: "4 months",
      price: "¥80,000",
      description:
        "Learn OOP, data processing, and web development with Django/Flask.",
    },
    {
      id: 6,
      title: "Java Enterprise Course",
      duration: "5 months",
      price: "¥100,000",
      description:
        "Build skills in Java, Spring Boot, databases, and Android app development.",
    },
    {
      id: 7,
      title: "JavaScript & TypeScript Course",
      duration: "4 months",
      price: "¥85,000",
      description:
        "Master modern JavaScript and TypeScript for web development.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header
        style={{
          background: "#2d2f31",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>MyBrainCode</h1>
        <nav>
          <a href="#" style={{ color: "white", marginRight: "20px" }}>
            Courses
          </a>
          <a href="#" style={{ color: "white" }}>
            Sign In
          </a>
        </nav>
      </header>
      <main>
        <h2>Welcome to MyBrainCode</h2>
        <p>
          Learn in-demand skills with our self-paced programming courses.
          Includes 2 mental coaching sessions!
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {courses.map((course) => (
            <li
              key={course.id}
              style={{
                border: "1px solid #ddd",
                margin: "10px 0",
                padding: "10px",
              }}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>Duration:</strong> {course.duration} |{" "}
                <strong>Price:</strong> {course.price}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
