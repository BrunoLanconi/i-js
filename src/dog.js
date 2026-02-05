class Dog {
  constructor(race, color, name) {
    this.race = race;
    this.color = color;
    this.name = name;
  }

  bark(what){
    console.log(`O cachorro ${this.name} latiu para ${what}!`);
  }
  bite(who){
    console.log(`O cachorro ${this.name} mordeu a/o ${who}!`);
  }
}

const doginho = new Dog("Bacê", "Marrom", "Pituca");
const catcholo = new Dog("Pitbull", "Branco", "Mancha");

doginho.bark("Bruno");
doginho.bark("Christian");
catcholo.bite("Cleber");
