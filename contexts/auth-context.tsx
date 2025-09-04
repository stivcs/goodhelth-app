"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User, AuthContextType } from "@/lib/types"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de usuario desde localStorage o API
    const savedUser = localStorage.getItem("goodhelth_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    let mockUser: User

    if (email === "admin@goodhelth.com") {
      mockUser = {
        id: "1",
        email,
        name: "Administrador GoodHelth",
        role: "admin",
        avatar: "/admin-avatar.jpg",
      }
    } else if (email.includes("doctor") || email.includes("psicologo")) {
      mockUser = {
        id: "2",
        email,
        name: "Dr. María González",
        role: "professional",
        specialization: "Psicología Clínica",
        licenseNumber: "PSI-12345",
        isVerified: true,
        avatar: "/professional-woman-psychologist.jpg",
      }
    } else {
      mockUser = {
        id: "3",
        email,
        name: "Usuario Ejemplo",
        role: "user",
        subscriptionType: email.includes("premium") ? "premium" : "free",
        avatar: "/user-avatar.jpg",
      }
    }

    setUser(mockUser)
    localStorage.setItem("goodhelth_user", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("goodhelth_user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
