import { getCourses, getTeacher } from "@/lib/data";
import { ClientCourseList } from "./client-course-list";

export default async function DataFetchingPage() {
  const [courses, teacher] = await Promise.all([getCourses(), getTeacher()]);

  return (
    <section className="page">
      <p className="eyebrow">Data Fetching</p>

      <div className="two-columns">
        <article className="panel">
          <p className="label">Loaded on the Server</p>
          <p>
            Teacher: <strong>{teacher}</strong>
          </p>
          <ul className="course-list">
            {courses.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
          </ul>
        </article>
        <ClientCourseList />
      </div>
    </section>
  );
}
