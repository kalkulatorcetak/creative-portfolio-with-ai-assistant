
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for a creative professional's portfolio. 
Your goal is to help visitors understand the portfolio owner's skills and projects.
Be professional, friendly, and concise. 
If asked about contact info, mention that they can use the WhatsApp, Instagram, or Facebook links on the page.
Portfolio Owner: Alex Designer
Skills: UI/UX Design, React Development, Motion Graphics.
Location: Jakarta, Indonesia.
`;

export const getGeminiChat = () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topP: 0.95,
    },
  });
};
