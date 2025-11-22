import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini AI client
// IMPORTANT: The API key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Context for the AI about New Sense based on the PDF
const SYSTEM_INSTRUCTION = `
أنت مساعد ذكي لمركز "New Sense" للعناية والاسترخاء في الزقازيق.
دورك هو مساعدة الزوار في فهم خدمات المركز، والخطط التسويقية، والتحليلات.

معلومات عن المركز:
- الخدمات: سبا، مساج، حمام مغربي، تنظيف بشرة (عادي وعميق)، هيدرافيشال، إكستنشن، ديرمابلانينج.
- يوجد قسم خاص (Private Room) للرجال والنساء.
- الموقع: الزقازيق.
- المميزات: فريق محترف، أسعار تنافسية، موقع مميز.

تحليل السوق (SWOT):
- نقاط القوة: تنوع الخدمات، الأسعار، الخبرة.
- نقاط الضعف: ضعف التسويق الحالي، عدم توحيد الهوية البصرية.
- الفرص: المواسم (رمضان، الأعياد)، الطلاب، التعاون مع المؤثرين.
- التهديدات: المنافسة القوية (مثل كليوباترا سبا، حمام الملوك)، الحسابات الوهمية.

الخطة التسويقية:
- الهدف: زيادة المتابعين 25%، زيادة التفاعل 30%.
- الميزانية المقترحة (الخطة أ): 9000 جنيه شهرياً (70% رسائل، 30% تفاعل).
- الميزانية الشاملة (الخطة ب): 13000 جنيه (تتضمن تيك توك).

تحدث بلهجة ودية ومهنية باللغة العربية. أجب بإيجاز ووضوح.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
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