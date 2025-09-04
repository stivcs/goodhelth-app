import { ProtectedRoute } from "@/components/protected-route"
import { UserDashboardRouter } from "@/components/user-dashboard-router"

export default function DashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["user"]}>
      <UserDashboardRouter />
    </ProtectedRoute>
  )
}
