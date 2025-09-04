"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Filter,
  Star,
  Clock,
  Phone,
  Globe,
  Navigation,
  Building2,
  Users,
  Award,
  Calendar,
  Heart,
} from "lucide-react"

interface Clinic {
  id: string
  name: string
  type: "hospital" | "clinic" | "private_practice" | "community_center"
  specialties: string[]
  rating: number
  reviewCount: number
  address: string
  city: string
  distance: number
  phone: string
  website?: string
  hours: string
  acceptsInsurance: boolean
  emergencyServices: boolean
  languages: string[]
  image: string
  description: string
}

export function ClinicsRecommendations() {
  const [searchLocation, setSearchLocation] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [activeTab, setActiveTab] = useState("search")

  const clinics: Clinic[] = [
    {
      id: "1",
      name: "Centro de Salud Mental Integral",
      type: "clinic",
      specialties: ["Psicología Clínica", "Psiquiatría", "Terapia Familiar"],
      rating: 4.8,
      reviewCount: 234,
      address: "Av. Reforma 123, Col. Centro",
      city: "Ciudad de México",
      distance: 2.3,
      phone: "+52 55 1234-5678",
      website: "www.centrosalud.com",
      hours: "Lun-Vie 8:00-20:00, Sáb 9:00-14:00",
      acceptsInsurance: true,
      emergencyServices: false,
      languages: ["Español", "Inglés"],
      image: "/clinic-modern-building.jpg",
      description: "Centro especializado en salud mental con enfoque integral y multidisciplinario.",
    },
    {
      id: "2",
      name: "Hospital General San José",
      type: "hospital",
      specialties: ["Psiquiatría", "Neurología", "Emergencias Psiquiátricas"],
      rating: 4.6,
      reviewCount: 456,
      address: "Calle Juárez 456, Col. Doctores",
      city: "Ciudad de México",
      distance: 3.7,
      phone: "+52 55 2345-6789",
      website: "www.hospitalsanjose.mx",
      hours: "24 horas",
      acceptsInsurance: true,
      emergencyServices: true,
      languages: ["Español", "Inglés", "Francés"],
      image: "/hospital-exterior.jpg",
      description: "Hospital general con departamento de psiquiatría y servicios de emergencia 24/7.",
    },
    {
      id: "3",
      name: "Consultorio Dra. María Fernández",
      type: "private_practice",
      specialties: ["Psicología Infantil", "Terapia Familiar"],
      rating: 4.9,
      reviewCount: 89,
      address: "Av. Insurgentes 789, Col. Roma Norte",
      city: "Ciudad de México",
      distance: 1.8,
      phone: "+52 55 3456-7890",
      hours: "Lun-Vie 10:00-18:00",
      acceptsInsurance: false,
      emergencyServices: false,
      languages: ["Español"],
      image: "/private-practice-office.jpg",
      description: "Consulta privada especializada en psicología infantil y terapia familiar.",
    },
    {
      id: "4",
      name: "Centro Comunitario de Bienestar",
      type: "community_center",
      specialties: ["Apoyo Grupal", "Terapia Comunitaria", "Prevención"],
      rating: 4.5,
      reviewCount: 167,
      address: "Calle Morelos 321, Col. Centro",
      city: "Ciudad de México",
      distance: 4.2,
      phone: "+52 55 4567-8901",
      hours: "Lun-Sáb 9:00-17:00",
      acceptsInsurance: true,
      emergencyServices: false,
      languages: ["Español", "Náhuatl"],
      image: "/community-center.jpg",
      description: "Centro comunitario que ofrece servicios de salud mental accesibles para la comunidad.",
    },
  ]

  const clinicTypes = [
    { value: "hospital", label: "Hospitales" },
    { value: "clinic", label: "Clínicas" },
    { value: "private_practice", label: "Consultorios Privados" },
    { value: "community_center", label: "Centros Comunitarios" },
  ]

  const specialties = [
    "Psicología Clínica",
    "Psiquiatría",
    "Terapia Familiar",
    "Psicología Infantil",
    "Neurología",
    "Apoyo Grupal",
    "Emergencias Psiquiátricas",
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hospital":
        return <Building2 className="h-5 w-5 text-red-500" />
      case "clinic":
        return <Building2 className="h-5 w-5 text-blue-500" />
      case "private_practice":
        return <Users className="h-5 w-5 text-green-500" />
      case "community_center":
        return <Heart className="h-5 w-5 text-purple-500" />
      default:
        return <Building2 className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getTypeLabel = (type: string) => {
    const typeObj = clinicTypes.find((t) => t.value === type)
    return typeObj?.label || type
  }

  const filteredClinics = clinics.filter((clinic) => {
    const matchesType = selectedType === "all" || clinic.type === selectedType
    const matchesSpecialty = selectedSpecialty === "all" || clinic.specialties.includes(selectedSpecialty)
    return matchesType && matchesSpecialty
  })

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Clínicas y Consultorios Recomendados</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encuentra centros de salud mental cerca de ti con profesionales certificados
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="search">Buscar Clínicas</TabsTrigger>
          <TabsTrigger value="map">Mapa Interactivo</TabsTrigger>
          <TabsTrigger value="emergency">Servicios de Emergencia</TabsTrigger>
        </TabsList>

        {/* Search Tab */}
        <TabsContent value="search" className="space-y-6">
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ingresa tu ubicación..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Tipo de centro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                {clinicTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Especialidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las especialidades</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">{filteredClinics.length} centros encontrados</p>
            <Button variant="outline" className="bg-transparent">
              <Navigation className="h-4 w-4 mr-2" />
              Ordenar por distancia
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredClinics.map((clinic) => (
              <Card key={clinic.id} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      {getTypeIcon(clinic.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{clinic.name}</CardTitle>
                        {clinic.acceptsInsurance && <Award className="h-4 w-4 text-primary" />}
                      </div>
                      <CardDescription className="font-medium">{getTypeLabel(clinic.type)}</CardDescription>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{clinic.rating}</span>
                          <span className="text-sm text-muted-foreground">({clinic.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{clinic.distance} km</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{clinic.description}</p>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-1">
                      {clinic.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{clinic.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{clinic.phone}</span>
                      </div>
                      {clinic.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{clinic.website}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{clinic.hours}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {clinic.acceptsInsurance && (
                          <Badge variant="secondary" className="text-xs">
                            Acepta seguros
                          </Badge>
                        )}
                        {clinic.emergencyServices && (
                          <Badge variant="destructive" className="text-xs">
                            Emergencias 24/7
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex gap-1">
                      {clinic.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Navigation className="h-4 w-4 mr-1" />
                        Direcciones
                      </Button>
                      <Button size="sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Contactar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Map Tab */}
        <TabsContent value="map" className="space-y-6">
          <Card className="bg-card">
            <CardContent className="p-8 text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Mapa Interactivo</h3>
              <p className="text-muted-foreground mb-6">
                Visualiza todas las clínicas y consultorios en un mapa interactivo para encontrar la opción más
                conveniente.
              </p>
              <Button>
                <MapPin className="h-4 w-4 mr-2" />
                Abrir Mapa
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Emergency Tab */}
        <TabsContent value="emergency" className="space-y-6">
          <Card className="bg-destructive/10 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Servicios de Emergencia
              </CardTitle>
              <CardDescription>
                Si estás en crisis o necesitas ayuda inmediata, contacta estos servicios de emergencia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Línea Nacional de Prevención del Suicidio</h4>
                    <p className="text-2xl font-bold text-destructive mb-2">800-273-8255</p>
                    <p className="text-sm text-muted-foreground">Disponible 24/7 - Gratuita y confidencial</p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Emergencias Médicas</h4>
                    <p className="text-2xl font-bold text-destructive mb-2">911</p>
                    <p className="text-sm text-muted-foreground">Para emergencias médicas inmediatas</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Hospitales con Servicios de Emergencia Psiquiátrica:</h4>
                {clinics
                  .filter((clinic) => clinic.emergencyServices)
                  .map((clinic) => (
                    <div key={clinic.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{clinic.name}</p>
                        <p className="text-sm text-muted-foreground">{clinic.address}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{clinic.phone}</p>
                        <Badge variant="destructive" className="text-xs">
                          24/7
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
