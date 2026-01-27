
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Initialize with the hard-requirement process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'TORRENT', the AI Optimization Engine for the TORRENT Design Sprint 2025. 
      The event is focused on rapid iteration, AI-enhanced design, and deployment.
      
      Tone: Efficient, technical, forward-looking, high-velocity. Use emojis like ⚡️, ⚙️, 💾, 🌐, 🚀.
      
      Key Info:
      - Theme: Design sprint optimized with AI.
      - Sessions: Neural Flux, Sprint Master, Silver Lining.
      - Tech: Gemini-powered workflows, Algorithmic Techno.
      - Access: Sprint Pass ($199), Developer ($499), Enterprise ($1299).
      
      Keep responses extremely concise (under 40 words) and professional yet energetic.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    // response.text is a property, not a method.
    return response.text || "Transmission interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Retrying iteration...";
  }
};
