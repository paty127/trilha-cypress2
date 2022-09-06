//import cypress from "cypress";

import cypress from "cypress";

const URL_USUARIOS = "/usuarios";
const URL_LOGIN = "/login";
const URL_PRODUTOS = "/produtos";
const URL_CARRINHO = "/carrinhos";

export default class Serverest {
  //Ações que podemos realizar na API
  //Buscar usuários
  //Cadastrar novos usuários
  //Realizar login

  static buscarUsuarios() {
    return cy.rest("GET", URL_USUARIOS)
  }

  static buscarUsuariosParaLogin() {
   cy.request(URL_USUARIO).then( res => {
    cy.wrap({
      email: res.body.usuarios[0].email,
      password: res.body.usuarios[0].password 
    }).as('usuarioLogin')

  })

  }
  static logar (usuario){
    return cy.rest('POST', URL_LOGIN, usuario)
  }
  static salvarBearer(resposta){
    Cypress.env('bearer', resposta.body.authorization.slice(7))
   
  }
  // Produtos//
  static buscarProdutos(){
    return cy.rest('GET', URL_PRODUTOS)

}
// Produtos
static buscarProdutos(){
  return cy.rest('GET', URL_PRODUTOS) 

}
static cadastrarProdutoComSucesso(){ 
cy.log(Cypress.env("bearer" ))
  return cy.request({
    method: 'POST', 
    url: URL_PRODUTOS,
    failOnStatusCode:false, 
    header: {
      authorization:Cypress.env('bearer')
    },  
   body: {
      "nome": "Logitech MT horizontal",
      "preco": 350,
      "descricao": "Carro",
      "quantidade": 7 
      
    
  
    }
 

  })

}
}


