/*function Pokemon(nome, tipo){
    this.nome = nome;
    this.tipo = tipo;
}

const pikachu = new Pokemon('Pikachu', 'Eletrico');*/

class Pokemon {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovao`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp);
    }

    /*atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com: ${nomeDoAtaque}`)
    }*/
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Eletrico');
    }
    
    atacar() {
        console.log(`${this.nome} atacou com choque do trovao`)
    }
}


const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('pikachu', 'eletrico');
//pikachu.atacar('Choque do Trovao');

//pikachu.nome = 'pikachu';
//pikachu.tipo = 'eletrico';

console.log(pikachu);
console.log(pikachuDoAsh);


console.log(pikachuDoAsh instanceof Pokemon);
console.log(pikachuDoAsh instanceof Pokemon);   