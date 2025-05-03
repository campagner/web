import  { FileArchive } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            Criado por Alexandre Campagner Carvalho em ambiente de testes.
          </p> 
          <div className="mt-4 md:mt-0 flex items-center">
            <a 
              href="https://archive.org/details/softwarelibrary_msdos_games" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center"
            >
              <FileArchive size={16} className="mr-1" />
              Biblioteca de Jogos DOS do Internet Archive
            </a>
          </div>
        </div>
      </div>
    </footer>
  ); 
}; 

export default Footer;
  