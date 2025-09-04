"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function UpgradePage() {
  const premiumFeatures = [
    "Chat ilimitado con IA especializada",
    "Videollamadas con profesionales certificados",
    "Citas programadas flexibles",
    "Terapia grupal especializada",
    "Biblioteca de recursos premium",
    "Línea de crisis 24/7 prioritaria",
    "Seguimiento personalizado de progreso",
    "Recomendaciones de clínicas personalizadas",
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Actualizar a Premium</h1>
            <p className="text-muted-foreground">Desbloquea el acceso completo a profesionales certificados</p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Plan */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Plan Actual - Gratuito
                <Badge variant="outline">Activo</Badge>
              </CardTitle>
              <CardDescription>Acceso básico a herramientas de bienestar mental</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                $0<span className="text-lg font-normal">/mes</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">5 chats diarios con IA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Búsqueda de clínicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Recursos básicos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                <Crown className="h-3 w-3 mr-1" />
                Recomendado
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Plan Premium
                <Crown className="h-5 w-5 text-yellow-500" />
              </CardTitle>
              <CardDescription>Acceso completo a profesionales y herramientas avanzadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-primary">
                $29.99<span className="text-lg font-normal text-foreground">/mes</span>
              </div>

              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg">
                <Crown className="h-4 w-4 mr-2" />
                Actualizar Ahora
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Cancela en cualquier momento. Sin compromisos a largo plazo.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">¿Puedo cancelar en cualquier momento?</h4>
              <p className="text-sm text-muted-foreground">
                Sí, puedes cancelar tu suscripción premium en cualquier momento desde tu perfil. Mantendrás el acceso
                hasta el final de tu período de facturación actual.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">¿Los profesionales están certificados?</h4>
              <p className="text-sm text-muted-foreground">
                Todos nuestros profesionales están licenciados y certificados en sus respectivas especialidades.
                Verificamos sus credenciales antes de unirse a nuestra plataforma.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">¿Qué incluye la línea de crisis 24/7?</h4>
              <p className="text-sm text-muted-foreground">
                Los usuarios premium tienen acceso prioritario a nuestra línea de crisis, con tiempos de respuesta más
                rápidos y soporte especializado en situaciones de emergencia.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
