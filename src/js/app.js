import Person from './Person';

export default class Team {
  constructor() {
    this.teams = [];
  }

  add(char) {
    this.teams.push(char);
  }

  * [Symbol.iterator]() {
    for (const item of this.teams) {
      yield new Person(item);
    }
  }
}