import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="planes" className="bg-whiteBackground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planes de Suscripción</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades de salud mental
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Gratuito */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Plan Gratuito</CardTitle>
              <CardDescription>Acceso básico a nuestra IA especializada</CardDescription>
              <div className="text-3xl font-bold text-primary">
                $0<span className="text-lg text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Chat ilimitado con IA especializada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Disponibilidad 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Recursos de autoayuda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Seguimiento básico del estado de ánimo</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/register">Comenzar Gratis</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Plan Premium */}
          <Card className="bg-card border-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="h-4 w-4" />
                Más Popular
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Plan Premium</CardTitle>
              <CardDescription>Acceso completo con profesionales certificados</CardDescription>
              <div className="text-3xl font-bold text-primary">
                $29<span className="text-lg text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Todo lo del plan gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Consultas con psicólogos certificados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Video llamadas ilimitadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Terapia grupal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Recomendaciones de clínicas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Seguimiento personalizado</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/premium">Obtener Premium</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
