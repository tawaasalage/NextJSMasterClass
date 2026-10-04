import { randomBytes } from "crypto";
import { mkdir, writeFile, readFile, unlink } from "fs/promises";
import { demoUsers } from "@/lib/demo-users";

const folder = ".sessions";

export async function createSession(userID: string) {
  const id = randomBytes(32).toString("hex");
  await mkdir(folder, { recursive: true });
  const sessionFilePath = `${folder}/${id}.json`;
  await writeFile(
    sessionFilePath,
    JSON.stringify({ userID, expires: Date.now() + 3600000 }), // 1 hour expiration
    { flag: "wx" },
  );
  return id;
}

export async function getSessionUser(id: string) {
  const sessionFilePath = `${folder}/${id}.json`;
  try {
    const session = JSON.parse(await readFile(sessionFilePath, "utf-8"));
    if (Date.now() > session.expires) {
      await unlink(sessionFilePath);
      return null;
    }

    return demoUsers.find((user) => user.id === session.userID) || null;
  } catch (error) {
    return null;
  }
}

export async function deleteSession(id: string) {
  try {
    const sessionFilePath = `${folder}/${id}.json`;
    await unlink(sessionFilePath);
  } catch (error) {
    return null;
  }
}
