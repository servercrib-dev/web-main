import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [hasShownInitially, setHasShownInitially] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-open chatbot after 2 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownInitially) {
        setIsOpen(true);
        setHasShownInitially(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasShownInitially]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      sendInitialGreeting();
    }
  }, [isOpen]);

  const sendInitialGreeting = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("chat-agent", {
        body: {
          messages: [
            { role: "user", content: "Hi" },
          ],
        },
      });

      if (error) throw error;

      if (data?.message) {
        setMessages([{ role: "assistant", content: data.message }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        {
          role: "assistant",
          content: "Hello! Welcome to ServerCrib Technology Solutions. How can I help you today?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to chat
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(newMessages);
    
    // Extract lead data from conversation
    extractLeadData(userMessage);

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("chat-agent", {
        body: { messages: newMessages },
      });

      if (error) {
        if (error.message?.includes("429")) {
          toast({
            title: "Too many requests",
            description: "Please wait a moment before sending another message.",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      if (data?.message) {
        setMessages([...newMessages, { role: "assistant", content: data.message }]);
        
        // Check if we have all required data and save lead
        if (leadData.name && leadData.email) {
          await saveLead();
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const extractLeadData = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Simple email extraction
    const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      setLeadData((prev) => ({ ...prev, email: emailMatch[0] }));
    }
    
    // Simple phone extraction (various formats)
    const phoneMatch = message.match(/[\d\s\-\(\)\+]{10,}/);
    if (phoneMatch) {
      setLeadData((prev) => ({ ...prev, phone: phoneMatch[0].trim() }));
    }
    
    // Store message as potential help description
    setLeadData((prev) => ({ ...prev, message: prev.message + " " + message }));
  };

  const saveLead = async () => {
    try {
      const { error } = await supabase.functions.invoke("save-lead", {
        body: leadData,
      });

      if (error) throw error;

      console.log("Lead saved successfully");
    } catch (error) {
      console.error("Error saving lead:", error);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <h3 className="font-semibold">Chat with us</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="hover:bg-primary/90"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg px-4 py-2">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
