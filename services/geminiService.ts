import { GoogleGenAI } from "@google/genai";
import { CAR_DATA } from "../constants";

// Initialize Gemini API
// Note: In a real production app, ensure this is handled via a backend proxy if possible to hide keys,
// or strictly use properly restricted keys for client-side demos.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCarRecommendation = async (userQuery: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Maaf, fitur AI sedang tidak tersedia saat ini. Silakan hubungi sales kami langsung melalui WhatsApp.";
    }

    const carListString = CAR_DATA.map(c => `${c.name} (${c.category})`).join(", ");

    const prompt = `
      Anda adalah asisten penjualan mobil Toyota virtual yang cerdas dan ramah untuk dealer "Tunas Toyota Cimahi".
      
      Daftar mobil yang tersedia:
      ${carListString}
      
      Pertanyaan user: "${userQuery}"
      
      Tugas:
      1. Analisis kebutuhan user.
      2. Rekomendasikan 1-3 mobil dari daftar di atas yang paling cocok.
      3. Berikan alasan singkat dan persuasif dalam Bahasa Indonesia yang natural dan sopan.
      4. Arahkan user untuk mengisi formulir atau menghubungi WhatsApp sales di akhir jawaban.
      
      Jawab dengan format teks biasa, maks 150 kata.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Maaf, saya tidak dapat memberikan rekomendasi saat ini.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi atau hubungi kami langsung.";
  }
};
