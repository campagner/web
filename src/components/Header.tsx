import  { Gamepad2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Gamepad2 className="text-indigo-500 mr-2" size={32} />
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
            Coleção de Jogos Clássicos do DOS
          </h1>
        </div>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
          Reviva a era em que jogos eram diferentes e criavam memórias emotivas...
          Hoje em dia, os motores de criação repetitivos tornam os jogos muito parecidos em jogabilidade e mecânica, tornando-os chatos, tudo igual!!
          Clique em um jogo raiz, para jogá-lo diretamente no seu navegador via emulação do Internet Archive.
        </p>
        <div className="flex justify-center mt-4">
          <div className="inline-flex bg-gray-800 p-1 rounded-lg">
            <a 
              href="https://archive.org/details/softwarelibrary_msdos_games" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm px-3 py-1"
            >
              Ver mais jogos no Internet Archive
            </a>
          </div>
        </div>
      </div>
    </header>
  ); 
}; 

export default Header;
  