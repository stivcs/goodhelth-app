import { ProfessionalsDirectory } from "@/components/professionals-directory"
import { Header } from "@/components/header"

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProfessionalsDirectory />
      </main>
    </div>
  )
}
