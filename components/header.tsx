"use client"

import { Button } from "@/components/ui/button"
import { Brain, Menu, LogOut } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { RoleBasedNavigation } from "@/components/role-based-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              GOOD<span className="text-primary">HELTH</span>
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {!user && (
              <>
                <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
                <Link href="#planes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Planes
                </Link>
                <Link href="#profesionales" className="text-muted-foreground hover:text-foreground transition-colors">
                  Profesionales
                </Link>
                <Link href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </>
            )}
            {user && <RoleBasedNavigation />}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <Button variant="ghost" asChild className="hidden sm:inline-flex">
                  <Link href="/login">Iniciar Sesión</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Registrarse</Link>
                </Button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    {user.role === "user" && user.subscriptionType && (
                      <p className="text-xs leading-none text-primary capitalize">Plan {user.subscriptionType}</p>
                    )}
                    {user.role === "professional" && (
                      <p className="text-xs leading-none text-primary">{user.specialization}</p>
                    )}
                    {user.role === "admin" && <p className="text-xs leading-none text-primary">Administrador</p>}
                  </div>
                  <DropdownMenuSeparator />
                  {user.role === "user" && (
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Mi Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  {user.role === "professional" && (
                    <DropdownMenuItem asChild>
                      <Link href="/professional">Mi Consulta</Link>
                    </DropdownMenuItem>
                  )}
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Panel Admin</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
