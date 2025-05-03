import  { Play } from 'lucide-react';
import { useState } from 'react';
import { Game } from '../types';
import GameModal from './GameModal';
import FallbackImage from './Fallback'; 

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <>
      <div className="game-card">
        <div className="relative group">
          <div className="aspect-video overflow-hidden bg-gray-800">
            {imageError ? (
              <FallbackImage 
                alt={`${game.title} - Imagem não disponível`} 
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={game.imageUrl} 
                alt={game.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
          <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            {game.year}
          </span>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h2 className="text-xl font-bold mb-1 text-white drop-shadow-md">{game.title}</h2>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3 drop-shadow-md">{game.description}</p>
            <button 
              onClick={() => setShowModal(true)} 
              className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded font-medium transition-colors"
            >
              <Play size={18} className="mr-2" /> Jogar Agora
            </button>
          </div>
        </div>
      </div>
      
      {showModal && (
        <GameModal game={game} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}; 

export default GameCard; 
  