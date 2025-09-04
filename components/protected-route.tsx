"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import type { UserRole } from "@/lib/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
  requiresSubscription?: boolean
}

export function ProtectedRoute({
  children,
  allowedRoles = ["user", "professional", "admin"],
  requiresSubscription = false,
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/login")
        return
      }

      if (!allowedRoles.includes(user.role)) {
        router.push("/unauthorized")
        return
      }

      if (requiresSubscription && user.role === "user" && user.subscriptionType === "free") {
        router.push("/upgrade")
        return
      }
    }
  }, [user, isLoading, allowedRoles, requiresSubscription, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return null
  }

  if (requiresSubscription && user.role === "user" && user.subscriptionType === "free") {
    return null
  }

  return <>{children}</>
}
