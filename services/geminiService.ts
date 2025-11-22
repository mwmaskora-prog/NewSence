import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini AI client
// IMPORTANT: Use Vite's environment variable format
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

// System instructions
const SYSTEM_INSTRUCTION = `
أنت مساعد ذكي لمركز "New Sense" للعناية والاسترخاء في الزقازيق.
دورك هو مساعدة الزوار في فهم خدمات المركز، والخطط التسويقية، والتحليلات.

معلومات عن المركز:
- الخدمات: سبا، مساج، حمام مغربي، تنظيف بشرة (عادي وعميق)، هيدرافيشال، إكستنشن، ديرمابلانينج.
- يوجد قسم خاص (Private Room) للرجال والنساء.
- الموقع: الزقازيق.
- المميزات: فريق محترف، أسعار تنافسية، موقع مميز.
`;

let chatSession: Chat | null = null;

const getChatSession = () => {
  if (!chatSession) {
    chatSession = ai.startChat({
      systemInstruction: SYSTEM_INSTRUCTION,
      history: [],
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response = await chat.sendMessage({ message });
    return response.text || "عذراً، لم أتمكن من معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "حدث خطأ أثناء الاتصال بالمساعد الذكي. يرجى المحاولة لاحقاً.";
  }
};
