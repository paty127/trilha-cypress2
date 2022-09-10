



Cypress.Commands.add('postarUsuarioSemSucesso', () => { 
return  cy.request({
    method: 'POST', 
    url: '/usuarios',
    failOnStatusCode: false, 
    body: {  
        "nome": "Ricky Turcotte",
        "email": "automation-postUserBrook.Harris33@yahoo.com",
        "password": "1234",
        "administrador": "true"
    }
    })
})
Cypress.Commands.add('rest', (method = 'GET', url = '/', body = null , failOnStatusCode = false) =>{

    return cy.request({
        method: method, 
        url: url,
        failOnStatusCode:failOnStatusCode, 
        body: body
     
    })  
})  
Cypress.Commands.add('logar', (email, senha) => {
    cy.request({
        method: 'POST',
        url: '/login',
        failOnStatusCode: false,
        body: { 
        "email": email,
        "password": senha
        }

    })  
})
Cypress.Commands.add('buscarUsuarioParaLogin', () => {
    cy.rest('GET', '/usuarios').then(res => {
     expect(res.body).to.haveOwnProperty('usuarios')

     return{

        email: res.body.usuarios[0].email,
        senha: res.body.usuarios[0].password
     }
       

    })  
})
       

    