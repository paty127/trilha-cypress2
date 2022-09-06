

export default class ValidaServerest {

    //Validações das ações que podemos realizar na API
    //Validar a  busca usuários 
    //Validar o cadastro de novos usuários
    //Validar o  login 

    static validarBuscaDeUsuarios(resposta){
      
            expect(resposta).to.be.a('object')
            expect(resposta.body.quantidade).to.be.a('number')
            expect(resposta.body.quantidade).to.be.greaterThan(3)
    }

    static validarLoginComSucesso(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('authorization')
    }
    static validarBuscaDeProdutos(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body).to.haveOwnProperty('nome')
        expect(resposta.body).to.haveOwnProperty('preco')
        expect(resposta.body).to.haveOwnProperty('produto')
    }  
    static validarCadastroDeProdutoComSucesso(resposta){
  

        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
        expect(resposta.body).to.haveOwnProperty('_id')
}
}