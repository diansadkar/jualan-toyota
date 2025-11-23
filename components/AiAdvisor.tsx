import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getCarRecommendation } from '../services/geminiService';

const AiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    const result = await getCarRecommendation(query);
    
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-toyota-dark to-gray-800 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold">Bingung Pilih Mobil? Tanya AI!</h2>
            </div>
            <p className="text-gray-300">
              Ceritakan kebutuhan Anda (misal: "Mobil keluarga irit bensin untuk 7 orang" atau "Mobil sport gagah untuk anak muda"), 
              dan asisten pintar kami akan merekomendasikan Toyota yang tepat untuk Anda.
            </p>
          </div>

          <div className="p-8">
            <form onSubmit={handleAskAi} className="mb-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Contoh: Saya butuh mobil MPV yang nyaman untuk keluar kota..."
                  className="flex-1 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyota-red focus:border-transparent outline-none transition-shadow"
                />
                <button
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="bg-toyota-red text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </form>

            {response && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg animate-fade-in">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                  Rekomendasi AI:
                </h3>
                <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                  {response}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAdvisor;