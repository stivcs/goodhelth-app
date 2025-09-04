"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, Clock, Award, MessageCircle, MapPin, Calendar } from "lucide-react"

export function ProfessionalsDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  const professionals = [
    {
      id: "1",
      name: "Dra. María González",
      specialty: "Psicología Clínica",
      subSpecialties: ["Ansiedad", "Depresión", "Trastornos del estado de ánimo"],
      rating: 4.9,
      reviewCount: 127,
      experience: 8,
      languages: ["Español", "Inglés"],
      location: "Ciudad de México",
      availability: "Disponible hoy",
      price: 75,
      image: "/professional-woman-psychologist.jpg",
      verified: true,
      bio: "Especialista en terapia cognitivo-conductual con enfoque en trastornos de ansiedad y depresión.",
    },
    {
      id: "2",
      name: "Dr. Carlos Rodríguez",
      specialty: "Psiquiatría",
      subSpecialties: ["Trastornos bipolares", "Esquizofrenia", "Medicación psiquiátrica"],
      rating: 4.8,
      reviewCount: 89,
      experience: 12,
      languages: ["Español", "Francés"],
      location: "Barcelona",
      availability: "Disponible mañana",
      price: 90,
      image: "/professional-man-psychiatrist.jpg",
      verified: true,
      bio: "Psiquiatra con amplia experiencia en el tratamiento de trastornos del estado de ánimo.",
    },
    {
      id: "3",
      name: "Dra. Ana Martínez",
      specialty: "Terapia Familiar",
      subSpecialties: ["Terapia de pareja", "Conflictos familiares", "Comunicación"],
      rating: 4.9,
      reviewCount: 156,
      experience: 10,
      languages: ["Español", "Inglés", "Portugués"],
      location: "Buenos Aires",
      availability: "Disponible hoy",
      price: 80,
      image: "/professional-woman-therapist.jpg",
      verified: true,
      bio: "Terapeuta familiar sistémica especializada en dinámicas familiares y de pareja.",
    },
    {
      id: "4",
      name: "Dr. Luis Fernández",
      specialty: "Psicología Infantil",
      subSpecialties: ["TDAH", "Autismo", "Problemas de conducta"],
      rating: 4.7,
      reviewCount: 73,
      experience: 6,
      languages: ["Español"],
      location: "Madrid",
      availability: "Disponible en 2 días",
      price: 70,
      image: "/professional-man-child-psychologist.jpg",
      verified: true,
      bio: "Psicólogo infantil especializado en trastornos del neurodesarrollo y problemas de conducta.",
    },
  ]

  const specialties = [
    "Psicología Clínica",
    "Psiquiatría",
    "Terapia Familiar",
    "Psicología Infantil",
    "Neuropsicología",
    "Terapia de Pareja",
  ]

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || professional.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Profesionales Certificados</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conecta con psicólogos y psiquiatras verificados para recibir atención personalizada
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o especialidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
          <SelectTrigger className="w-full md:w-64">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filtrar por especialidad" />
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

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">{filteredProfessionals.length} profesionales encontrados</p>
        <Button variant="outline" className="bg-transparent">
          Ordenar por disponibilidad
        </Button>
      </div>

      {/* Professionals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProfessionals.map((professional) => (
          <Card key={professional.id} className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={professional.image || "/placeholder.svg"} alt={professional.name} />
                  <AvatarFallback>
                    {professional.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-xl">{professional.name}</CardTitle>
                    {professional.verified && <Award className="h-5 w-5 text-primary" />}
                  </div>
                  <CardDescription className="text-base font-medium">{professional.specialty}</CardDescription>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{professional.rating}</span>
                      <span className="text-sm text-muted-foreground">({professional.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{professional.experience} años</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{professional.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{professional.bio}</p>

              <div>
                <p className="text-sm font-medium text-foreground mb-2">Especialidades:</p>
                <div className="flex flex-wrap gap-1">
                  {professional.subSpecialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-1">Idiomas:</p>
                <div className="flex gap-1">
                  {professional.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <p className="text-lg font-semibold text-foreground">${professional.price}/sesión</p>
                  <p className="text-sm text-muted-foreground">{professional.availability}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                  <Button size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Agendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-muted/50 text-center">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">¿No encuentras el profesional adecuado?</h3>
          <p className="text-muted-foreground mb-6">
            Nuestro equipo puede ayudarte a encontrar el especialista perfecto para tus necesidades
          </p>
          <Button size="lg">Solicitar Recomendación Personalizada</Button>
        </CardContent>
      </Card>
    </div>
  )
}
