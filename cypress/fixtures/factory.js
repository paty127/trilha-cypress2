
const  faker  = require('faker');

export default class Factory {

    static gerarProduto(){
        return {
            "nome": faker.commerce.productName(),
            "preco": faker.datatype.number(),
            "descricao": faker.commerce.productDescription(),
            "quantidade": faker.datatype.number(),
        }
    }

    static gerarInteroAleatorio(){
        return faker.datatype.number(5)
    }
    

    }
