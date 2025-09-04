export type UserRole = "admin" | "professional" | "user"
export type SubscriptionType = "free" | "premium"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  subscriptionType?: SubscriptionType
  avatar?: string
  specialization?: string // Para profesionales
  licenseNumber?: string // Para profesionales
  isVerified?: boolean
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}
