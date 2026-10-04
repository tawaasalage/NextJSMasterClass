import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/get-user";

export default async function Home() {
  redirect((await getUser()) ? "/dashboard" : "/login");
}
