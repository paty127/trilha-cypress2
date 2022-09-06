///<reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Caso de teste sobre a rota /login da API Serverest', () => {

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

