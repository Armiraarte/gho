import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToAssistant } from '../services/geminiService';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Bienvenido a Grupo Hermosillo de Occidente. Soy su asistente corporativo de alto nivel. ¿En qué puedo asistirle respecto a nuestras divisiones hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToAssistant(history, userMsg.text);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button con Oro */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 gold-bg text-black p-4 rounded-full shadow-[0_0_30px_rgba(201,204,211,0.4)] transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_40px_rgba(201,204,211,0.6)] ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-full max-w-[400px] bg-[#0d0d0d] rounded-sm shadow-2xl overflow-hidden transition-all duration-500 transform border border-white/5 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      >
        {/* Header con Oro */}
        <div className="bg-black p-6 flex justify-between items-center border-b border-[#c9ccd3]/20">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#c9ccd3]/10 flex items-center justify-center border border-[#c9ccd3]/30">
              <Bot className="text-[#c9ccd3]" size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Consultoría IA</h3>
              <p className="text-gray-500 text-[9px] uppercase tracking-widest flex items-center mt-1">
                <span className="w-1.5 h-1.5 gold-bg rounded-full mr-2 shadow-[0_0_8px_#c9ccd3]"></span>
                Servicio Activo
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:gold-text transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[450px] p-6 overflow-y-auto bg-[#050505] space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 text-xs md:text-sm leading-relaxed font-light text-justify ${
                  msg.role === 'user'
                    ? 'gold-bg text-black font-semibold'
                    : 'bg-brand-800 border border-white/5 text-gray-300'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-brand-800 border border-white/5 p-4 flex items-center space-x-3">
                <Loader2 className="animate-spin text-[#c9ccd3]" size={16} />
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Analizando Protocolos...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 bg-black border-t border-[#c9ccd3]/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-3"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Realice su consulta ejecutiva..."
              className="flex-1 bg-brand-800 border border-white/10 text-gray-200 text-xs rounded-none focus:border-[#c9ccd3] p-4 transition-all outline-none placeholder-gray-600"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="gold-bg text-black p-4 disabled:opacity-30 disabled:grayscale transition-all hover:shadow-[0_0_15px_rgba(201,204,211,0.3)]"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
