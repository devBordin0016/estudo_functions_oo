"use strict";

var redesSociais = ['FaceBook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho Perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, "Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

//every

alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFronEnd = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFronEnd);
var existeAlguAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frondend';
});
console.log(existeAlguAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += " ".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

/*console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function(numeroAtual){
    numeroAtual = numeroAtual;
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);*/