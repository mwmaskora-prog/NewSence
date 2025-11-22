import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'مرحباً بك في New Sense! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟ تسألني عن خدماتنا، الأسعار، أو خططنا التسويقية.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-6rem)]">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col border border-orange-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 text-white flex items-center">
          <div className="bg-white/20 p-2 rounded-full ml-3">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg">مساعد New Sense الذكي</h2>
            <p className="text-orange-100 text-sm">مدعوم بواسطة Gemini AI</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-2 mr-2 mt-1 ${
                    msg.role === 'user' ? 'bg-gray-200 text-gray-600' : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white text-gray-800 rounded-tr-none border border-gray-100'
                      : 'bg-orange-600 text-white rounded-tl-none'
                  }`}
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex w-full justify-end">
              <div className="flex flex-row-reverse max-w-[80%]">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-2">
                    <Bot size={16} />
                 </div>
                 <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center">
                    <Loader2 className="w-5 h-5 animate-spin text-orange-500 ml-2" />
                    <span className="text-gray-500 text-sm">جاري الكتابة...</span>
                 </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="اكتب استفسارك هنا..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400 px-4 py-2"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`p-3 rounded-full transition-colors ${
                !inputValue.trim() || isLoading
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-orange-600 text-white hover:bg-orange-700 shadow-md'
              }`}
            >
              <Send size={20} className={isLoading ? 'opacity-0' : 'opacity-100'} />
              {isLoading && <Loader2 size={20} className="absolute animate-spin" />}
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
             يمكن للذكاء الاصطناعي أن يخطئ. يرجى التحقق من المعلومات الهامة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
