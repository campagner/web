import  { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameCard from './components/GameCard';
import { games } from './data/games'; 

function App() {
   const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const filteredGames = games
    .filter(game => 
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'title') {
        return sortOrder === 'asc' 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else {
        return sortOrder === 'asc'
          ? parseInt(a.year) - parseInt(b.year)
          : parseInt(b.year) - parseInt(a.year);
      }
    }); 

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 flex-grow">
             <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar jogos..."
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
                   <div className="flex gap-2">
            <select
              className="bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'title' | 'year')}
              aria-label="Ordenar por"
            >
              <option value="title">Nome</option>
              <option value="year">Ano</option>
            </select>
            
            <button
              className="bg-gray-800 text-white border border-gray-700 rounded-lg p-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all hover:bg-gray-700"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              title={sortOrder === 'asc' ? 'Ordenação Crescente' : 'Ordenação Decrescente'}
              aria-label={sortOrder === 'asc' ? 'Mudar para ordem decrescente' : 'Mudar para ordem crescente'}
            >
              <Filter size={20} className={`transform ${sortOrder === 'desc' ? 'rotate-180' : ''} transition-transform`} />
            </button>
          </div> 
        </div> 
        
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div> 
        
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhum jogo encontrado com "{searchTerm}"</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
  