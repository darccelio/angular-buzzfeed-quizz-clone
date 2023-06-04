export interface Theme {
  theme: string;
  id: number;
  title: string;
  questions: Question[];
  results: Result;
}

export interface Question {
  id: number;
  question: string;
  options: AnswerOption[];
}

export interface AnswerOption {
  id: number;
  name: string;
  alias: string;
}

export interface Result {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
}

// {
//   "theme": "Viagem",
//   "id": 1,
//   "title": "Viagem pelo Tempo",
//   "questions": [
//     {
//       "id": 1,
//       "question": "Em qual época histórica você gostaria de viajar?",
//       "options": [
//         {
//           "id": 1,
//           "name": "Idade da Pedra",
//           "alias": "A"
//         },
//         {
//           "id": 2,
//           "name": "Renascimento",
//           "alias": "B"
//         },
//         {
//           "id": 3,
//           "name": "Era Vitoriana",
//           "alias": "C"
//         },
//         {
//           "id": 4,
//           "name": "Futuro distante",
//           "alias": "D"
//         },
//         {
//           "id": 5,
//           "name": "Antigo Egito",
//           "alias": "E"
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "question": "Qual seria o propósito da sua viagem no tempo?",
//       "options": [
//         {
//           "id": 1,
//           "name": "Alterar o curso da história",
//           "alias": "A"
//         },
//         {
//           "id": 2,
//           "name": "Aprender com grandes mentes do passado",
//           "alias": "B"
//         },
//         {
//           "id": 3,
//           "name": "Preservar segredos do futuro",
//           "alias": "C"
//         },
//         {
//           "id": 4,
//           "name": "Explorar civilizações antigas",
//           "alias": "D"
//         },
//         {
//           "id": 5,
//           "name": "Resolver mistérios históricos",
//           "alias": "E"
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "question": "Como você lidaria com o paradoxo temporal?",
//       "options": [
//         {
//           "id": 1,
//           "name": "Evitaria qualquer mudança para não afetar o presente",
//           "alias": "A"
//         },
//         {
//           "id": 2,
//           "name": "Aproveitaria a oportunidade para mudar o futuro",
//           "alias": "B"
//         },
//         {
//           "id": 3,
//           "name": "Tomaria cuidado para não interferir diretamente",
//           "alias": "C"
//         },
//         {
//           "id": 4,
//           "name": "Experimentaria diferentes possibilidades e observaria as consequências",
//           "alias": "D"
//         },
//         {
//           "id": 5,
//           "name": "Ignoraria o paradoxo e faria o que bem entendesse",
//           "alias": "E"
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "question": "Quais recursos tecnológicos você levaria para a viagem?",
//       "options": [
//         {
//           "id": 1,
//           "name": "Um smartphone com conexão à internet",
//           "alias": "A"
//         },
//         {
//           "id": 2,
//           "name": "Um guia de viagem com informações históricas",
//           "alias": "B"
//         },
//         {
//           "id": 3,
//           "name": "Um traje futurista com proteção e camuflagem",
//           "alias": "C"
//         },
//         {
//           "id": 4,
//           "name": "Um dispositivo de tradução simultânea",
//           "alias": "D"
//         },
//         {
//           "id": 5,
//           "name": "Uma máquina do tempo portátil",
//           "alias": "E"
//         }
//       ]
//     },
//     {
//       "id": 5,
//       "question": "Qual seria o impacto da sua viagem no tempo?",
//       "options": [
//         {
//           "id": 1,
//           "name": "Alteraria significativamente o curso da história",
//           "alias": "A"
//         },
//         {
//           "id": 2,
//           "name": "Influenciaria sutilmente alguns eventos",
//           "alias": "B"
//         },
//         {
//           "id": 3,
//           "name": "Não causaria grandes mudanças",
//           "alias": "C"
//         },
//         {
//           "id": 4,
//           "name": "Preservaria o fluxo temporal original",
//           "alias": "D"
//         },
//         {
//           "id": 5,
//           "name": "Criaria uma realidade alternativa",
//           "alias": "E"
//         }
//       ]
//     }
//   ],
//   "results": {
//     "A": "Você seria um viajante do tempo impulsivo, capaz de mudar o curso da história.",
//     "B": "Você seria um estudioso do tempo, buscando aprender com o passado.",
//     "C": "Você seria um guardião do tempo, cuidando para não interferir diretamente.",
//     "D": "Você seria um explorador do tempo, experimentando diferentes possibilidades.",
//     "E": "Você seria um disruptor temporal, criando realidades alternativas."
//   }
// },
