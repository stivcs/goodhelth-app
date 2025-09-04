"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { Users, UserCheck, MessageSquare, TrendingUp, Settings, Search } from "lucide-react"

export function AdminDashboard() {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")

  // Mock data para el dashboard
  const stats = {
    totalUsers: 15420,
    activeProfessionals: 89,
    totalSessions: 3240,
    monthlyGrowth: 12.5,
  }

  const recentUsers = [
    {
      id: 1,
      name: "Ana García",
      email: "ana@email.com",
      role: "user",
      subscription: "premium",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Dr. Carlos López",
      email: "carlos@email.com",
      role: "professional",
      specialty: "Psiquiatría",
      joinDate: "2024-01-14",
    },
    {
      id: 3,
      name: "María Rodríguez",
      email: "maria@email.com",
      role: "user",
      subscription: "free",
      joinDate: "2024-01-13",
    },
    {
      id: 4,
      name: "Dra. Laura Martín",
      email: "laura@email.com",
      role: "professional",
      specialty: "Psicología",
      joinDate: "2024-01-12",
    },
  ]

  const professionals = [
    {
      id: 1,
      name: "Dr. Carlos López",
      specialty: "Psiquiatría",
      license: "PSI-12345",
      status: "verified",
      patients: 45,
      rating: 4.8,
      sessions: 120,
    },
    {
      id: 2,
      name: "Dra. Laura Martín",
      specialty: "Psicología Clínica",
      license: "PSI-67890",
      status: "pending",
      patients: 32,
      rating: 4.9,
      sessions: 89,
    },
    {
      id: 3,
      name: "Dr. Miguel Torres",
      specialty: "Terapia Familiar",
      license: "PSI-54321",
      status: "verified",
      patients: 28,
      rating: 4.7,
      sessions: 76,
    },
  ]

  const systemSettings = [
    { key: "maxFreeChats", label: "Máximo chats gratuitos por día", value: "5" },
    { key: "sessionDuration", label: "Duración sesión (minutos)", value: "50" },
    { key: "premiumPrice", label: "Precio premium mensual ($)", value: "29.99" },
    { key: "maintenanceMode", label: "Modo mantenimiento", value: "false" },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Panel de Administración</h1>
            <p className="text-muted-foreground">Bienvenido, {user?.name}</p>
          </div>
          <Button>
            <Settings className="w-4 h-4 mr-2" />
            Configuración
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profesionales Activos</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProfessionals}</div>
              <p className="text-xs text-muted-foreground">+3 nuevos esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sesiones Totales</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSessions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Crecimiento Mensual</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.monthlyGrowth}%</div>
              <p className="text-xs text-muted-foreground">Objetivo: 15%</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="professionals">Profesionales</TabsTrigger>
            <TabsTrigger value="analytics">Analíticas</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Usuarios</CardTitle>
                <CardDescription>Administra todos los usuarios de la plataforma</CardDescription>

                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar usuarios..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterRole} onValueChange={setFilterRole}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filtrar por rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los roles</SelectItem>
                      <SelectItem value="user">Usuarios</SelectItem>
                      <SelectItem value="professional">Profesionales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`/user-${user.id}.jpg`} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={user.role === "professional" ? "default" : "secondary"}>
                          {user.role === "professional" ? "Profesional" : "Usuario"}
                        </Badge>
                        {user.subscription && (
                          <Badge variant={user.subscription === "premium" ? "default" : "outline"}>
                            {user.subscription}
                          </Badge>
                        )}
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Professionals Tab */}
          <TabsContent value="professionals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Profesionales</CardTitle>
                <CardDescription>Administra y verifica profesionales de salud mental</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {professionals.map((prof) => (
                    <div key={prof.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`/professional-${prof.id}.jpg`} />
                          <AvatarFallback>
                            {prof.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{prof.name}</p>
                          <p className="text-sm text-muted-foreground">{prof.specialty}</p>
                          <p className="text-xs text-muted-foreground">Licencia: {prof.license}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm">
                          <p>{prof.patients} pacientes</p>
                          <p className="text-muted-foreground">{prof.sessions} sesiones</p>
                        </div>
                        <Badge variant={prof.status === "verified" ? "default" : "destructive"}>
                          {prof.status === "verified" ? "Verificado" : "Pendiente"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {prof.status === "verified" ? "Ver Perfil" : "Verificar"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Uso de la Plataforma</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Chats con IA (Gratuitos)</span>
                      <span className="font-medium">2,340 esta semana</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sesiones Premium</span>
                      <span className="font-medium">456 esta semana</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nuevos Registros</span>
                      <span className="font-medium">89 esta semana</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversiones a Premium</span>
                      <span className="font-medium">12 esta semana</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ingresos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Ingresos Mensuales</span>
                      <span className="font-medium">$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suscripciones Activas</span>
                      <span className="font-medium">415</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tasa de Retención</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Valor Promedio por Usuario</span>
                      <span className="font-medium">$29.99</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuración del Sistema</CardTitle>
                <CardDescription>Ajusta los parámetros principales de la plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {systemSettings.map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{setting.label}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input defaultValue={setting.value} className="w-32" />
                        <Button variant="outline" size="sm">
                          Guardar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
