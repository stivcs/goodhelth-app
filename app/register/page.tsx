import { RegisterForm } from "@/components/register-form"
import { Header } from "@/components/header"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Crear Cuenta</h2>
            <p className="mt-2 text-muted-foreground">Únete a GoodHelth y comienza tu bienestar mental</p>
          </div>
          <RegisterForm />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
