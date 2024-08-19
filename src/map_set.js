//map
let meuMap = new Map();
meuMap.set("nome", "fernando");
meuMap.set("stack", "css", "html", "js");

console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

//meuMap.clear();

console.log(meuMap.size);

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);

const cpfs = new Set();

cpfs.add('79689010069');
cpfs.add('78159840020');
cpfs.add('56984167027');

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);