import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Video, Users, MapPin, Clock, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: "Chat con IA Especializada",
      description: "Conversa con nuestra IA entrenada en salud mental disponible 24/7 de forma gratuita.",
    },
    {
      icon: Video,
      title: "Consultas con Profesionales",
      description: "Sesiones por video llamada con psicólogos y psiquiatras certificados.",
    },
    {
      icon: Users,
      title: "Terapia Grupal",
      description: "Participa en sesiones grupales dirigidas por profesionales especializados.",
    },
    {
      icon: MapPin,
      title: "Recomendaciones de Clínicas",
      description: "Te ayudamos a encontrar clínicas y consultorios cerca de tu ubicación.",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Acceso inmediato a apoyo cuando más lo necesites, cualquier día del año.",
    },
    {
      icon: Shield,
      title: "Privacidad Garantizada",
      description: "Todas tus conversaciones están protegidas con encriptación de extremo a extremo.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos diferentes servicios para mejorar tu bienestar mental y emocional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
