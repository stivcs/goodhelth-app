import { ChatInterface } from "@/components/chat-interface"
import { Header } from "@/components/header"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="h-[calc(100vh-4rem)]">
        <ChatInterface />
      </main>
    </div>
  )
}
