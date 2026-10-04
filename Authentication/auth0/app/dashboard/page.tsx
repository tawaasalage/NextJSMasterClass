import { ApiTester } from "@/components/api-tester";
import { SignOutButton } from "@/components/sign-out-button";
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getUser();

  // if (!user) redirect("/login");

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard! </p>
        </div>
        <SignOutButton />
      </div>

      <p>
        User Role <span className="tag">{user?.role}</span>
      </p>
      <ApiTester />
    </div>
  );
}
