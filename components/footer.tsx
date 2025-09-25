import { Brain, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="items-center space-y-4">
          {/* Logos and banner */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logoGoodHealth.webp" alt="GoodHelth Logo" width={50} height={40} />
              <img src="/GoodHealth.webp" alt="GoodHelth Logo" width={100} height={10} />
            </Link>
            <p className="text-white">
              Cuidado completo de salud mental con tecnología avanzada y profesionales certificados.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/chat" className="hover:text-foreground transition-colors">
                  Chat con IA
                </Link>
              </li>
              <li>
                <Link href="/profesionales" className="hover:text-foreground transition-colors">
                  Consultas Profesionales
                </Link>
              </li>
              <li>
                <Link href="/terapia-grupal" className="hover:text-foreground transition-colors">
                  Terapia Grupal
                </Link>
              </li>
              <li>
                <Link href="/clinicas" className="hover:text-foreground transition-colors">
                  Recomendaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/nosotros" className="hover:text-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-foreground transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-foreground transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3 text-white">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hola@goodhelth.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Disponible globalmente</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-white text-muted-foreground">
          <p>&copy; 2024 GoodHelth. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
