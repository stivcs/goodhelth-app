"use client"

import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function RoleBasedNavigation() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="flex gap-4">
      {user.role === "admin" && (
        <Link href="/admin">
          <Button variant="outline">Panel Admin</Button>
        </Link>
      )}

      {user.role === "professional" && (
        <Link href="/professional">
          <Button variant="outline">Mi Consulta</Button>
        </Link>
      )}

      {user.role === "user" && (
        <>
          <Link href="/chat">
            <Button variant="outline">Chat IA</Button>
          </Link>
          {user.subscriptionType === "premium" && (
            <Link href="/premium">
              <Button variant="outline">Dashboard Premium</Button>
            </Link>
          )}
        </>
      )}
    </div>
  )
}
