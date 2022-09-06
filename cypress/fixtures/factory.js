const faker = require('faker');
export default class Factory {
    static gerarProduto() {
        return {
            "nome": 'C3 MV Horizontal',
            "preco": 47,
            "descricao": "mouse",
            "quantidade": 381

        }
    }
}