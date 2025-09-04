"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/contexts/auth-context"
import { MessageCircle, Crown, Zap, Users, Video, Calendar, ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

export function FreeDashboard() {
  const { user } = useAuth()
  const [dailyChatsUsed] = useState(3)
  const maxDailyChats = 5

  const premiumFeatures = [
    {
      icon: Video,
      title: "Videollamadas con Profesionales",
      description: "Sesiones cara a cara con psicólogos certificados",
    },
    {
      icon: Calendar,
      title: "Citas Programadas",
      description: "Agenda sesiones en horarios que te convengan",
    },
    {
      icon: Users,
      title: "Terapia Grupal",
      description: "Únete a grupos de apoyo especializados",
    },
    {
      icon: Crown,
      title: "Chat Ilimitado",
      description: "Sin límites en conversaciones con IA",
    },
  ]

  const todayTips = [
    "Practica 5 minutos de respiración profunda",
    "Escribe 3 cosas por las que te sientes agradecido",
    "Sal a caminar al aire libre por 15 minutos",
    "Conecta con un amigo o familiar",
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">¡Hola, {user?.name}!</h1>
          <p className="text-muted-foreground">Tu bienestar mental es nuestra prioridad</p>
        </div>
        <Badge variant="outline" className="bg-muted">
          Plan Gratuito
        </Badge>
      </div>

      {/* Daily Usage Card */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Chat con IA - Uso Diario
              </CardTitle>
              <CardDescription>
                Has usado {dailyChatsUsed} de {maxDailyChats} chats gratuitos hoy
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{maxDailyChats - dailyChatsUsed}</p>
              <p className="text-sm text-muted-foreground">chats restantes</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={(dailyChatsUsed / maxDailyChats) * 100} className="h-2" />
          <div className="flex gap-2">
            <Link href="/chat" className="flex-1">
              <Button className="w-full" disabled={dailyChatsUsed >= maxDailyChats}>
                <MessageCircle className="h-4 w-4 mr-2" />
                {dailyChatsUsed >= maxDailyChats ? "Límite Alcanzado" : "Continuar Chat"}
              </Button>
            </Link>
            <Button variant="outline" className="bg-transparent">
              <Zap className="h-4 w-4 mr-2" />
              Actualizar a Premium
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>Herramientas disponibles en tu plan gratuito</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/chat">
                <Button variant="outline" className="w-full h-20 flex-col gap-2 bg-transparent">
                  <MessageCircle className="h-6 w-6" />
                  <span>Chat con IA</span>
                </Button>
              </Link>
              <Link href="/clinicas">
                <Button variant="outline" className="w-full h-20 flex-col gap-2 bg-transparent">
                  <Calendar className="h-6 w-6" />
                  <span>Buscar Clínicas</span>
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Premium Features Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                Desbloquea Funciones Premium
              </CardTitle>
              <CardDescription>Accede a profesionales certificados y herramientas avanzadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border rounded-lg bg-muted/30">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
              <Button className="w-full">
                <Crown className="h-4 w-4 mr-2" />
                Actualizar a Premium - $29.99/mes
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Daily Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Consejos del Día</CardTitle>
              <CardDescription>Pequeños pasos hacia el bienestar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>¿Necesitas Ayuda?</CardTitle>
              <CardDescription>Estamos aquí para apoyarte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Centro de Ayuda
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Users className="h-4 w-4 mr-2" />
                Comunidad
              </Button>
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-sm font-medium text-destructive mb-1">Emergencia</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Si tienes pensamientos de autolesión, contacta inmediatamente:
                </p>
                <p className="text-sm font-medium">📞 911 o tu línea de crisis local</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
