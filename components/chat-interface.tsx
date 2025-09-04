"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Bot, User, Heart, Lightbulb, Shield } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "¡Hola! Soy tu asistente de salud mental de GoodHelth. Estoy aquí para escucharte y apoyarte. ¿Cómo te sientes hoy?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "Entiendo cómo te sientes. Es completamente normal tener estos sentimientos. ¿Puedes contarme más sobre lo que está pasando?",
      "Gracias por compartir eso conmigo. Tu bienestar es importante. ¿Has probado alguna técnica de respiración cuando te sientes así?",
      "Me alegra que hayas decidido hablar sobre esto. Es un paso valiente. ¿Qué actividades sueles hacer que te hacen sentir mejor?",
      "Comprendo tu situación. Recuerda que no estás solo en esto. ¿Te gustaría que te sugiera algunas estrategias de manejo del estrés?",
      "Es importante que reconozcas tus emociones. ¿Has considerado hablar con un profesional? Nuestro plan premium te conecta con psicólogos certificados.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const quickResponses = [
    "Me siento ansioso",
    "Tengo problemas para dormir",
    "Me siento triste",
    "Necesito técnicas de relajación",
  ]

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary rounded-full p-2">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Asistente de Salud Mental</h2>
            <p className="text-sm text-muted-foreground">Siempre disponible para ti</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">En línea</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            {message.sender === "ai" && (
              <div className="bg-primary rounded-full p-2 h-8 w-8 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
            {message.sender === "user" && (
              <div className="bg-secondary rounded-full p-2 h-8 w-8 flex items-center justify-center">
                <User className="h-4 w-4 text-secondary-foreground" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="bg-primary rounded-full p-2 h-8 w-8 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="bg-muted text-muted-foreground max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-current rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-current rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Responses */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Respuestas rápidas:</p>
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputMessage(response)}
                className="text-xs bg-transparent"
              >
                {response}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button type="submit" disabled={!inputMessage.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Este es un servicio de apoyo. En caso de emergencia, contacta servicios de emergencia locales.
        </p>
      </div>

      {/* Sidebar with Tips */}
      <div className="hidden lg:block absolute right-4 top-20 w-64">
        <Card className="bg-card">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Consejos de Bienestar</h3>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <Lightbulb className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Respira profundo</p>
                  <p className="text-xs text-muted-foreground">Inhala 4 segundos, mantén 4, exhala 4</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Shield className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Espacio seguro</p>
                  <p className="text-xs text-muted-foreground">Tus conversaciones son privadas y seguras</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full text-sm bg-transparent">
              Upgrade a Premium
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
