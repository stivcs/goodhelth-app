"use client"

import { useAuth } from "@/contexts/auth-context"
import { FreeDashboard } from "@/components/free-dashboard"
import { PremiumDashboard } from "@/components/premium-dashboard"

export function UserDashboardRouter() {
  const { user } = useAuth()

  if (!user || user.role !== "user") {
    return null
  }

  if (user.subscriptionType === "premium") {
    return <PremiumDashboard />
  }

  return <FreeDashboard />
}
