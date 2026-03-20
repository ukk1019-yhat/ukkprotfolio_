
import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const getAIVisionResponse = async (userPrompt: string) => {
  if (!API_KEY) {
    console.error("VITE_GEMINI_API_KEY is missing in environment variables.");
    return "The AI Vision system is currently offline. Please check back later.";
  }

  try {
    const genAI = new GoogleGenAI({ apiKey: API_KEY });
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are the AI digital persona of Uma Krishna Kanth Chokkapu (UKK). 
      
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
      
      User asks: ${userPrompt}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || "I am processing the future. Please wait.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with the neural network. Please retry.";
  }
};
