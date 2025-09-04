import { ProtectedRoute } from "@/components/protected-route"
import { ProfessionalDashboard } from "@/components/professional-dashboard"

export default function ProfessionalPage() {
  return (
    <ProtectedRoute allowedRoles={["professional"]}>
      <ProfessionalDashboard />
    </ProtectedRoute>
  )
}
