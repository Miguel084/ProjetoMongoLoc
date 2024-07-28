describe('Lembrete spec', () => {
  
  let data = new Date();
  let dataDeAmanha = new Date(data.setDate(data.getDate() + 1));
  
  it('Cadastrar lembrete', () => {
    cy.visit('https://localhost:7150')
    cy.get('#nome').type('Lembrete 1 Automatizado')
    cy.get('#data').type(dataDeAmanha.toISOString().split('T')[0])
    cy.get('button').click()
  })
})