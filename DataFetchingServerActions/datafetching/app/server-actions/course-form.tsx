"use client";

import { useActionState } from "react";
import { saveCourse } from "./actions";

export function CourseForm() {
  const [message, formAction, pending] = useActionState(saveCourse, "");

  return (
    <form className="panel form-card" action={formAction}>
      <label>Course title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter course title"
      />
      <button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save Course"}
      </button>

      {message && <p className="message">{message}</p>}
    </form>
  );
}
