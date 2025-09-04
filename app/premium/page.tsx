import { PremiumDashboard } from "@/components/premium-dashboard"
import { Header } from "@/components/header"

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PremiumDashboard />
      </main>
    </div>
  )
}
