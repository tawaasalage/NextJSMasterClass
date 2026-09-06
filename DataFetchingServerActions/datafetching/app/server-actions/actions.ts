"use server";
import { revalidatePath } from "next/cache";

export async function saveCourse(_prevMessage: string, formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string" || title.trim().length < 3) {
    return "Course title must be at least 3 characters long.";
  }

  console.log("Saving course with title:", title);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  revalidatePath("/server-actions");

  return `Course ${title} saved! Successfully!`;
}
