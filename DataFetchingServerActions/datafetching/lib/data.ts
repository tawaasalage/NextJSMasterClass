export type Course = {
  id: number;
  title: string;
  level: "Beginner" | "Intermediate";
};

const courses: Course[] = [
  { id: 1, title: "Server Components", level: "Beginner" },
  { id: 2, title: "Parallel Fetching", level: "Intermediate" },
  { id: 3, title: "Caching Basics", level: "Intermediate" },
];

// These functions imitate database or API calls.
export async function getCourses(): Promise<Course[]> {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return courses;
}

export async function getTeacher() {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return "Alex Morgan";
}
