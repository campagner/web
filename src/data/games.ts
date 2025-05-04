import  { Game } from '../types';

// Usando imagens com opções de fallback
export const games: Game[] = [
  {
    id: 'prince-of-persia',
    title: 'Prince of Persia',
    year: '1989',
    description: 'Um jogo de plataforma cinematográfico onde você navega por armadilhas mortais e duelos de espada para salvar a princesa em 60 minutos.',
    imageUrl: 'images/prince.png',
    archiveUrl: 'https://archive.org/details/msdos_Prince_of_Persia_1990',
  },
  {
    id: 'stunts',
    title: 'Stunts',
    year: '1990',
    description: 'Um avançado jogo de corrida 3D com editor de pistas e recursos para manobras como loopings, saltos e parafusos.',
    imageUrl: 'images/stunts.png',
    archiveUrl: 'https://archive.org/details/msdos_Stunts_1990',
  },
  {
    id: 'test-drive',
    title: 'Test Drive',
    year: '1987',
    description: 'Corra com carros esportivos exóticos em estradas perigosas à beira de precipícios, evitando o tráfego e a polícia.',
    imageUrl: 'images/td.png',
    archiveUrl: 'https://archive.org/details/msdos_Test_Drive_1987',
  },
  {
    id: 'golden-axe',
    title: 'Golden Axe',
    year: '1990',
    description: 'Jogo de arcade hack and slash com deslocamento lateral com três heróis lutando para derrotar o maligno Death Adder.',
    imageUrl: 'images/golden.png',
    archiveUrl: 'https://archive.org/details/msdos_Golden_Axe_1990',
  },
  {
    id: 'doom',
    title: 'Doom',
    year: '1993',
    description: 'FPS revolucionário onde você batalha contra demônios do Inferno como um fuzileiro espacial em Marte.',
    imageUrl: 'images/doom.png',
    archiveUrl: 'https://archive.org/details/DoomsharewareEpisode',
  },
  {
    id: 'speed-racer',
    title: 'Speed Racer in The Challenge of Racer X',
    year: '1992',
    description: 'Jogo de corrida clássico com personagem carismático',
    imageUrl: 'images/sr.png',
    archiveUrl: 'https://archive.org/details/msdos_Speed_Racer_in_The_Challenge_of_Racer_X_1992',
  }
]; 
  