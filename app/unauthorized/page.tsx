import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto bg-destructive/10 rounded-full p-3 w-fit mb-4">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle>Acceso No Autorizado</CardTitle>
          <CardDescription>
            No tienes permisos para acceder a esta página. Por favor, verifica que tengas el rol correcto o contacta al
            administrador.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/" className="block">
            <Button className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
