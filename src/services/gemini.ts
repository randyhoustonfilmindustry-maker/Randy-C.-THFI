import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const geminiModel = "gemini-3-flash-preview";

export async function checkPitchReadiness(concept: string) {
  const prompt = `
    You are an expert film and TV development executive. 
    Analyze the following concept or logline and provide a structured feedback report.
    
    Concept: ${concept}
    
    Provide the response in Markdown format with the following sections:
    1. Premise Clarity (Score 1-10 and explanation)
    2. Genre Fit (How well it fits its intended genre)
    3. Character Hook (Is there a compelling protagonist/antagonist?)
    4. World Distinctiveness (Is the setting unique or fresh?)
    5. Overall Industry Potential
    6. One "Pro Tip" for improvement.
  `;

  try {
    const response = await ai.models.generateContent({
      model: geminiModel,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error checking pitch readiness:", error);
    throw error;
  }
}

export async function refineLogline(details: { protagonist: string; world: string; conflict: string; stakes: string }) {
  const prompt = `
    You are a professional Hollywood script doctor and logline specialist.
    Based on the following details, generate 3 high-quality, industry-standard logline variations.
    
    Protagonist: ${details.protagonist}
    World: ${details.world}
    Conflict: ${details.conflict}
    Stakes: ${details.stakes}
    
    Provide the response in Markdown format, listing 3 distinct variations.
  `;

  try {
    const response = await ai.models.generateContent({
      model: geminiModel,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error refining logline:", error);
    throw error;
  }
}
