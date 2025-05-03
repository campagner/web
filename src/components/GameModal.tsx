import  { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Game } from '../types';

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

const GameModal = ({ game, onClose }: GameModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">{game.title} ({game.year})</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-grow overflow-auto p-4">
          <div className="aspect-video bg-black relative rounded overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-gray-600 border-t-indigo-500 rounded-full animate-spin"></div>
              </div>
            )}
            <iframe 
              src={`${game.archiveUrl}/index.html`}
              className="w-full h-full"
              title={`Jogar ${game.title}`}
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Sobre o Jogo</h3>
            <p className="text-gray-300">{game.description}</p>
            
                       <div className="mt-4 text-sm text-gray-400">
              <p>Se o jogo não carregar corretamente, você pode <a href={game.archiveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">acessar diretamente o Internet Archive</a> para jogar.</p>
              <p className="mt-2">Alguns jogos podem demorar para iniciar. Aguarde o processo de emulação ser concluído.</p>
            </div> 
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={onClose}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
 