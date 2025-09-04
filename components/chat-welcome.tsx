import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, Shield, Heart } from "lucide-react"
import Link from "next/link"

export function ChatWelcome() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <MessageCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Chat con IA Especializada</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conversa con nuestra inteligencia artificial entrenada específicamente en salud mental. Disponible 24/7 para
          brindarte apoyo cuando lo necesites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card">
          <CardHeader>
            <Clock className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Disponible 24/7</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Accede a apoyo inmediato cualquier hora del día, todos los días del año.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Completamente Privado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Tus conversaciones están protegidas con encriptación de extremo a extremo.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <Heart className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-lg">Apoyo Especializado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              IA entrenada específicamente para brindar apoyo empático en salud mental.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/chat">
            <MessageCircle className="mr-2 h-5 w-5" />
            Comenzar Conversación
          </Link>
        </Button>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-3">Importante recordar:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Este servicio es de apoyo y no reemplaza la atención médica profesional</li>
            <li>• En caso de emergencia, contacta inmediatamente a servicios de emergencia</li>
            <li>• Para atención profesional personalizada, considera nuestro plan premium</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
