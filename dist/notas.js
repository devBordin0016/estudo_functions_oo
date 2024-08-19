"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 5.0
}, {
  nome: 'Bruno',
  nota: 7.5
}, {
  nome: 'Carlos',
  nota: 8.0
}, {
  nome: 'Diana',
  nota: 6.5
}, {
  nome: 'Eduardo',
  nota: 9.5
}, {
  nome: 'Fernanda',
  nota: 5.5
}];
function filtrarAlunosComNotaSuficiente(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAlunosComNotaSuficiente(alunos);
console.log(alunosAprovados);