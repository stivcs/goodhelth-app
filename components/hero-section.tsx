import { Button } from "@/components/ui/button"
import { MessageCircle, Video } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-whiteBackground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Cuidado Completo de <span className="text-primary">Salud Mental</span> para Todos
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Estamos siempre disponibles para nuestros usuarios con problemas de salud mental. Puedes contactarnos
            fácilmente 24/7. Nos enfocamos en la más alta calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/chat">
                <MessageCircle className="mr-2 h-5 w-5" />
                Comenzar Chat Gratuito
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/premium">
                <Video className="mr-2 h-5 w-5" />
                Ver Plan Premium
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Usuarios Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Profesionales Certificados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
