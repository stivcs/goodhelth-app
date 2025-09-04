import { ClinicsRecommendations } from "@/components/clinics-recommendations"
import { Header } from "@/components/header"

export default function ClinicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ClinicsRecommendations />
      </main>
    </div>
  )
}
