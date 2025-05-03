import  React from 'react';
import { Gamepad2 } from 'lucide-react';

interface FallbackImageProps {
  alt: string;
  className?: string;
}

// Componente para exibir uma imagem alternativa quando uma imagem não carrega
const FallbackImage: React.FC<FallbackImageProps> = ({ alt, className }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-700 ${className}`}>
      <div className="text-gray-400 text-center p-4">
        <div className="flex justify-center mb-2">
          <Gamepad2 size={48} className="text-indigo-400" />
        </div>
        <p className="text-sm">{alt}</p>
      </div>
    </div>
  );
};

export default FallbackImage; 
 