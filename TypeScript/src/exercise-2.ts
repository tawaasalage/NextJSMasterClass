function getFirstElement<T>(array: T[]) {
  return array[0];
}

const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];

console.log(getFirstElement<number>(numbers));
console.log(getFirstElement<string>(names));

interface Student {
  id: number;
  name: string;
  age: number;
  level: "Undergraduate" | "Graduate";
  email?: string;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

interface CourseFee {
  fee: number;
}

type StudentContact = Student & Address & CourseFee;

const student: StudentContact = {
  id: 1,
  name: "John Doe",
  age: 20,
  level: "Undergraduate",
  email: "john@gmail.com",
  street: "123 Main St",
  city: "New York",
  country: "USA",
  fee: 2000,
};

console.log(student);

interface OnlineCourse {
  type: "ONLINE";
  title: string;
  url: string;
}

interface OnSiteCourse {
  type: "ONSITE";
  title: string;
  location: string;
}

type Course = OnlineCourse | OnSiteCourse;

const courseA: Course = {
  type: "ONLINE",
  title: "TypeScript Basics",
  url: "https://example.com/typescript-basics",
};

const courseB: Course = {
  type: "ONSITE",
  title: "Advanced TypeScript",
  location: "New York City",
};

function getCourseInfo(course: Course): string {
  if (course.type === "ONLINE") {
    return `Online Course: ${course.title} - Join Our Zoom Meeting: ${course.url}`;
  } else {
    return `On-Site Course: ${course.title} - Location: ${course.location}`;
  }
}

console.log(getCourseInfo(courseA));
console.log(getCourseInfo(courseB));

type APIResponse<T> = {
  status: "success" | "error";
  data: T;
  isError: boolean;
};

type APIResponseFetchData = APIResponse<{ products: string[]; total: number }>;
type APIResponseAlert = APIResponse<{ alert: string }>;

const response_1: APIResponseFetchData = {
  status: "success",
  data: { products: ["Product 1", "Product 2", "Product 3"], total: 3 },
  isError: false,
};

console.log(response_1);

const response_2: APIResponseAlert = {
  status: "success",
  data: { alert: "Alert displayed successfully" },
  isError: false,
};

console.log(response_2);

// const response_2: APIResponse = {
//   status: "success",
//   data: { alert: "Alert displayed successfully" },
//   isError: false,
// };
