const cliente = {
    nome: "André",
    idade: 32,
    CPF: "1223334444",
    email: "andre@dominio.com",
};

//console.log(cliente.nome);

console.log(`Os 3 primeiros dígitos do CPF são ${cliente.CPF.slice(0,3)}`);
