"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Video, MessageCircle, Star, Clock, Users, Award, Phone, MapPin, BookOpen } from "lucide-react"

interface Professional {
  id: string
  name: string
  specialty: string
  rating: number
  experience: number
  languages: string[]
  availability: string
  price: number
  image: string
  verified: boolean
}

export function PremiumDashboard() {
  const [selectedTab, setSelectedTab] = useState("professionals")

  const professionals: Professional[] = [
    {
      id: "1",
      name: "Dra. María González",
      specialty: "Psicología Clínica",
      rating: 4.9,
      experience: 8,
      languages: ["Español", "Inglés"],
      availability: "Disponible hoy",
      price: 75,
      image: "/professional-woman-psychologist.jpg",
      verified: true,
    },
    {
      id: "2",
      name: "Dr. Carlos Rodríguez",
      specialty: "Psiquiatría",
      rating: 4.8,
      experience: 12,
      languages: ["Español", "Francés"],
      availability: "Disponible mañana",
      price: 90,
      image: "/professional-man-psychiatrist.jpg",
      verified: true,
    },
    {
      id: "3",
      name: "Dra. Ana Martínez",
      specialty: "Terapia Familiar",
      rating: 4.9,
      experience: 10,
      languages: ["Español", "Inglés", "Portugués"],
      availability: "Disponible hoy",
      price: 80,
      image: "/professional-woman-therapist.jpg",
      verified: true,
    },
    {
      id: "4",
      name: "Dr. Luis Fernández",
      specialty: "Psicología Infantil",
      rating: 4.7,
      experience: 6,
      languages: ["Español"],
      availability: "Disponible en 2 días",
      price: 70,
      image: "/professional-man-child-psychologist.jpg",
      verified: true,
    },
  ]

  const upcomingAppointments = [
    {
      id: "1",
      professional: "Dra. María González",
      date: "Hoy",
      time: "3:00 PM",
      type: "Video consulta",
      status: "confirmed",
    },
    {
      id: "2",
      professional: "Dr. Carlos Rodríguez",
      date: "Mañana",
      time: "10:00 AM",
      type: "Chat privado",
      status: "pending",
    },
  ]

  const groupSessions = [
    {
      id: "1",
      title: "Manejo de Ansiedad",
      facilitator: "Dra. Ana Martínez",
      date: "Viernes",
      time: "6:00 PM",
      participants: 8,
      maxParticipants: 12,
    },
    {
      id: "2",
      title: "Apoyo para Depresión",
      facilitator: "Dr. Luis Fernández",
      date: "Sábado",
      time: "4:00 PM",
      participants: 6,
      maxParticipants: 10,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Premium</h1>
          <p className="text-muted-foreground">Acceso completo a profesionales certificados</p>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          Plan Premium Activo
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Citas programadas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Sesiones completadas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Grupos activos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">∞</p>
                <p className="text-sm text-muted-foreground">Chat ilimitado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="professionals">Profesionales</TabsTrigger>
          <TabsTrigger value="appointments">Mis Citas</TabsTrigger>
          <TabsTrigger value="groups">Terapia Grupal</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
        </TabsList>

        {/* Professionals Tab */}
        <TabsContent value="professionals" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Profesionales Disponibles</h2>
            <Button variant="outline" className="bg-transparent">
              Filtrar por especialidad
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionals.map((professional) => (
              <Card key={professional.id} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={professional.image || "/placeholder.svg"} alt={professional.name} />
                      <AvatarFallback>
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{professional.name}</CardTitle>
                        {professional.verified && <Award className="h-4 w-4 text-primary" />}
                      </div>
                      <CardDescription>{professional.specialty}</CardDescription>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{professional.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{professional.experience} años</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Idiomas:</p>
                    <div className="flex gap-1">
                      {professional.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">${professional.price}/sesión</p>
                      <p className="text-xs text-muted-foreground">{professional.availability}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Chat
                      </Button>
                      <Button size="sm">
                        <Video className="h-4 w-4 mr-1" />
                        Agendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Appointments Tab */}
        <TabsContent value="appointments" className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Mis Citas</h2>

          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        {appointment.type === "Video consulta" ? (
                          <Video className="h-6 w-6 text-primary" />
                        ) : (
                          <MessageCircle className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{appointment.professional}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.date} a las {appointment.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={appointment.status === "confirmed" ? "default" : "secondary"}
                        className={appointment.status === "confirmed" ? "bg-primary" : ""}
                      >
                        {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                      </Badge>
                      <Button size="sm">{appointment.type === "Video consulta" ? "Unirse" : "Abrir Chat"}</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="w-full">
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Nueva Cita
          </Button>
        </TabsContent>

        {/* Group Therapy Tab */}
        <TabsContent value="groups" className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Terapia Grupal</h2>

          <div className="space-y-4">
            {groupSessions.map((session) => (
              <Card key={session.id} className="bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">Facilitado por {session.facilitator}</p>
                        <p className="text-sm text-muted-foreground">
                          {session.date} a las {session.time}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {session.participants}/{session.maxParticipants} participantes
                        </p>
                      </div>
                    </div>
                    <Button size="sm">Unirse al Grupo</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <Users className="h-4 w-4 mr-2" />
            Explorar Más Grupos
          </Button>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Recursos Premium</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Biblioteca de Recursos</CardTitle>
                <CardDescription>Acceso a artículos, ejercicios y técnicas especializadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Explorar Recursos</Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Línea de Crisis 24/7</CardTitle>
                <CardDescription>Acceso prioritario a línea de emergencia para usuarios premium</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Información
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Recomendaciones Personalizadas</CardTitle>
                <CardDescription>Clínicas y consultorios recomendados según tu ubicación</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Ver Recomendaciones</Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Seguimiento Personalizado</CardTitle>
                <CardDescription>Informes detallados de tu progreso y bienestar mental</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Progreso
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
