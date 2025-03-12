const leitura = require ("prompt-sync")();
let nome = leitura("Qual o seu nome?");
let sobrenome = leitura("Qual o seu sobrenome?");
let cidade = leitura("Qual cidade você mora?");
let idade = leitura("Qual a sua idade?");
let time = leitura("Que time você torce?");
console.log ("O seu nome é " + nome + ", seu sobrenome é " + sobrenome + ", você mora em " + cidade + ", você tem "
     + idade + " anos de idade" + " , você torce para o " + time + ".");