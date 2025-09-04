import { ProtectedRoute } from "@/components/protected-route"
import { UpgradePage } from "@/components/upgrade-page"

export default function Upgrade() {
  return (
    <ProtectedRoute allowedRoles={["user"]}>
      <UpgradePage />
    </ProtectedRoute>
  )
}
