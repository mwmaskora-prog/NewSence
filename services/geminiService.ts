import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

// نحتفظ بالجلسة في الذاكرة
let chatSession: any = null;

// System instruction
const SYSTEM_INSTRUCTION = `
أنت مساعد ذكي لمركز "New Sense" للعناية والاسترخاء في الزقازيق.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // إنشاء جلسة جديدة لو لسه مفيش واحدة
    if (!chatSession) {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash", // أو "gemini-pro" لو عايز
        systemInstruction: SYSTEM_INSTRUCTION,
      });

      chatSession = model.startChat({
        history: [],
      });
    }

    const response = await chatSession.sendMessage(message);
    return response.response.text();
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.";
  }
};
