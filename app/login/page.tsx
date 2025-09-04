import { LoginForm } from "@/components/login-form"
import { Header } from "@/components/header"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Iniciar Sesión</h2>
            <p className="mt-2 text-muted-foreground">Accede a tu cuenta de GoodHelth</p>
          </div>
          <LoginForm />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-primary hover:text-primary/80 font-medium">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
