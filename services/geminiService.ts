
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIVisionResponse = async (userPrompt: string) => {
  if (!API_KEY) return "The AI Vision system is currently offline. Please check back later.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the AI digital persona of Uma Krishna Kanth Chokkapu (UKK). 
      
      About UKK:
      - B.Tech CSE student at JNTU Kakinada (2024-Present).
      - Founder & Frontend Developer at Edu Alt Tech (2023-Present), a SaaS-based alternative education platform.
      - Frontend Developer at Expresso AI (2026-Present), building B2B AI automation platforms.
      - National-level athlete (Gold Medalist in Softball) with an execution-focused mindset.
      - Skills: Python, Java, SQL, HTML/CSS, AI/Automation, Scalable Architecture.
      - Notable Projects: FreshGuard AI (Grocery Management), Pedestrian Safety Beacon.
      - Achievements: Gold Medalist in 44th Senior & 39th Junior National Softball Championships.
      
      Answer questions about his vision, his startups, his technical skills, or his athletic background. 
      Be futuristic, bold, confident, and professional. 
      Keep responses concise and impactful.
      
      User asks: ${userPrompt}`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "I am processing the future. Please wait.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with the neural network. Please retry.";
  }
};
