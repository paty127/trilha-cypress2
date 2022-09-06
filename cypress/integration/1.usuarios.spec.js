///<reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Caso de teste sobre a rota /usuarios da API Serverest', () => {

  it('Deve buscar todos os usuários cadastrados na Serverest', () => {
    Serverest.buscarUsuarios().then( res => {
      ValidaServerest.validarBuscaDeUsuarios(res)
    })
})

    it('Não deve postar um novo usuario administrador existente', () => {
      cy.postarUsuarioSemSucesso().then( 
        res => {
        expect(res).to.be.a("object")
        expect(res.body.message).to.be.a("string")
        expect(res.body.message).to.be.eq("Este email já está sendo usado")
      })
    })
 
    it("Deve realizar login com sucesso", () => {

      Serverest.buscarUsuarioParaLogin().then( usuario => {
        Serverest.logar(usuario).then(res => {
        ValidaServerest.validaLoginComSucesso(res)
          var bearer = res.body.authorization.slice(7)
          cy.log(bearer)
        })
      })
    })
  })
