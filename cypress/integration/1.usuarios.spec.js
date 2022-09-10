///<reference types="cypress" />


import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'
import Factory from '../fixtures/factory'


describe('Caso de teste sobre a rota /usuarios da API Serverest', () => {

  it('Deve buscar todos os usuários cadastrados na Serverest', () => {
    Serverest.buscarUsuarios().then(res => {
      ValidaServerest.validarBuscaDeUsuarios(res)
    })
  })

  it('Não deve postar um novo usuario administrador existente', () =>   {
    cy.postarUsuarioSemSucesso().then(res => {
        expect(res).to.be.a('object')
        expect(res.body.message).to.be.a('string')
        expect(res.body.message).to.be.eq("Este email já está sendo usado")
      })
  })

  it('Deve realizar login com sucesso', () => {

    Serverest.buscarUsuarioParaLogin()
    cy.get('@usuarioLogin').then( usuario => {
      Serverest.logar(usuario).then( res => {
        ValidaServerest.validarLoginComSucesso(res)
        Serverest.salvarBearer(res)
      })
    })
  })
  
  it('Deve buscar e salvar  um usuario em  um arquivo JSON', () => {
    let inteiro =Factory.gerarInteroAleatorio()
    Serverest.buscarUsuarios().then( res => {
     
      cy.writeFile('./cypress/fixtures/usuario.json', res.body.usuarios[inteiro])
      ValidaServerest.validarBuscaDeUsuarios(res)
    })    
  })
  it('Deve buscar um usuario de um arquivo Json', () => {
    cy.fixture('usuario.json').then( json => {
      let usuario = {
        email: json.email,
        password: json.password
      }
      Serverest.logar(usuario).then( res => {
        ValidaServerest.validarLoginComSucesso(res)
        Serverest.salvarBearer(res)
      })
    })
  })
})
