import Disciplina from './disciplina';

class ItinerarioFormativo {
  disciplinas: Disciplina[];

  constructor(disciplinas: Disciplina[]) {
    this.disciplinas = disciplinas;
  }
}

export default ItinerarioFormativo;
