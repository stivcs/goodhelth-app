"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/contexts/auth-context"
import { Calendar, MessageSquare, Users, Clock, Star, Video, Phone, FileText, Settings, Search } from "lucide-react"

export function ProfessionalDashboard() {
  const { user } = useAuth()
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)

  // Mock data para el dashboard del profesional
  const stats = {
    totalPatients: 45,
    todayAppointments: 6,
    weeklyHours: 32,
    rating: 4.8,
  }

  const todaySchedule = [
    {
      id: 1,
      time: "09:00",
      patient: "Ana García",
      type: "video",
      status: "confirmed",
      notes: "Seguimiento de ansiedad",
    },
    {
      id: 2,
      time: "10:30",
      patient: "Carlos López",
      type: "chat",
      status: "confirmed",
      notes: "Primera consulta",
    },
    {
      id: 3,
      time: "14:00",
      patient: "María Rodríguez",
      type: "video",
      status: "pending",
      notes: "Terapia de pareja",
    },
    {
      id: 4,
      time: "15:30",
      patient: "Luis Martín",
      type: "phone",
      status: "confirmed",
      notes: "Control mensual",
    },
  ]

  const patients = [
    {
      id: 1,
      name: "Ana García",
      age: 28,
      condition: "Ansiedad",
      lastSession: "2024-01-15",
      totalSessions: 8,
      status: "active",
      avatar: "/patient-1.jpg",
    },
    {
      id: 2,
      name: "Carlos López",
      age: 35,
      condition: "Depresión",
      lastSession: "2024-01-14",
      totalSessions: 12,
      status: "active",
      avatar: "/patient-2.jpg",
    },
    {
      id: 3,
      name: "María Rodríguez",
      age: 42,
      condition: "Estrés laboral",
      lastSession: "2024-01-13",
      totalSessions: 5,
      status: "active",
      avatar: "/patient-3.jpg",
    },
    {
      id: 4,
      name: "Luis Martín",
      age: 31,
      condition: "Trastorno del sueño",
      lastSession: "2024-01-12",
      totalSessions: 15,
      status: "completed",
      avatar: "/patient-4.jpg",
    },
  ]

  const activeChats = [
    {
      id: 1,
      patient: "Ana García",
      lastMessage: "Gracias por la sesión de hoy, me siento mucho mejor",
      timestamp: "10:30 AM",
      unread: 0,
    },
    {
      id: 2,
      patient: "Carlos López",
      lastMessage: "¿Podríamos cambiar la cita de mañana?",
      timestamp: "9:15 AM",
      unread: 2,
    },
    {
      id: 3,
      patient: "María Rodríguez",
      lastMessage: "He estado practicando los ejercicios que me recomendó",
      timestamp: "Ayer",
      unread: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mi Consulta</h1>
            <p className="text-muted-foreground">
              Bienvenido, {user?.name} - {user?.specialization}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Configurar Perfil
            </Button>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Ver Calendario
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pacientes Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">+3 nuevos este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Citas Hoy</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.todayAppointments}</div>
              <p className="text-xs text-muted-foreground">2 pendientes de confirmar</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Horas Semanales</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.weeklyHours}h</div>
              <p className="text-xs text-muted-foreground">Meta: 40h semanales</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calificación</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.rating}</div>
              <p className="text-xs text-muted-foreground">Basado en 127 reseñas</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schedule">Agenda de Hoy</TabsTrigger>
            <TabsTrigger value="patients">Mis Pacientes</TabsTrigger>
            <TabsTrigger value="chats">Chats Activos</TabsTrigger>
            <TabsTrigger value="notes">Notas Clínicas</TabsTrigger>
          </TabsList>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Agenda de Hoy -{" "}
                  {new Date().toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardTitle>
                <CardDescription>Gestiona tus citas y sesiones programadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="font-medium">{appointment.time}</p>
                          <Badge
                            variant={appointment.status === "confirmed" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                          </Badge>
                        </div>
                        <div>
                          <p className="font-medium">{appointment.patient}</p>
                          <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {appointment.type === "video" && <Video className="w-4 h-4" />}
                        {appointment.type === "phone" && <Phone className="w-4 h-4" />}
                        {appointment.type === "chat" && <MessageSquare className="w-4 h-4" />}
                        <Button variant="outline" size="sm">
                          {appointment.type === "video"
                            ? "Iniciar Video"
                            : appointment.type === "phone"
                              ? "Llamar"
                              : "Abrir Chat"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mis Pacientes</CardTitle>
                <CardDescription>Gestiona el historial y progreso de tus pacientes</CardDescription>

                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar pacientes..." className="pl-10" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {patient.age} años • {patient.condition}
                          </p>
                          <p className="text-xs text-muted-foreground">Última sesión: {patient.lastSession}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm">
                          <p>{patient.totalSessions} sesiones</p>
                          <Badge variant={patient.status === "active" ? "default" : "secondary"}>
                            {patient.status === "active" ? "Activo" : "Completado"}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver Historial
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Chats Tab */}
          <TabsContent value="chats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Chats Activos</CardTitle>
                <CardDescription>Mensajes y conversaciones con tus pacientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeChats.map((chat) => (
                    <div
                      key={chat.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`/patient-${chat.id}.jpg`} />
                          <AvatarFallback>
                            {chat.patient
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{chat.patient}</p>
                            {chat.unread > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate max-w-md">{chat.lastMessage}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{chat.timestamp}</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Abrir Chat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notas Clínicas</CardTitle>
                <CardDescription>Registra observaciones y seguimiento de pacientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Paciente</label>
                      <Input placeholder="Seleccionar paciente..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Fecha de sesión</label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Observaciones</label>
                    <Textarea
                      placeholder="Registra las observaciones de la sesión, progreso del paciente, recomendaciones..."
                      className="min-h-32"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Plan de tratamiento</label>
                    <Textarea
                      placeholder="Próximos pasos, ejercicios recomendados, objetivos..."
                      className="min-h-24"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button>
                      <FileText className="w-4 h-4 mr-2" />
                      Guardar Nota
                    </Button>
                    <Button variant="outline">Ver Historial de Notas</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
