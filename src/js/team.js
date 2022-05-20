export default class Team {
  constructor() {
    this.roundTeam = new Set();
  }

  addRoundTeam(...persons) {
    persons.forEach((person) => {
      this.roundTeam.add(person);
    });
  }

  * [Symbol.iterator]() {
    const arrRoundTeam = Array.from(this.roundTeam);
    for (const person of arrRoundTeam) {
      yield person;
    }
  }
}
