"use client";

import { Course } from "@/lib/data";
import { useEffect, useState } from "react";

export function ClientCourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((data: Course[]) => setCourses(data));
  }, []);

  return (
    <article className="panel">
      <p className="label">Loaded on the Browser</p>
      {courses.length == 0 ? (
        <p>Loading ....</p>
      ) : (
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
