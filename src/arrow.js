const minhaFuncao = () =>  "Diz ola";

const retornarUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})


console.log(minhaFuncao())
console.log(retornarUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this);
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this);
        this.velocidadeAtual -=10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)