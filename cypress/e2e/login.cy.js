describe('Автотесты_форма_авторизации', function () {

    it('Позитивный кейс, верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); 
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton ').click();
         cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно');
         cy.get('#exitMessageButton').should('be.visible');
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru'); 
        cy.get('#restoreEmailButton').should('have.text', 'Отправить код');
        cy.get('#exitRestoreButton').should('be.visible');
    })
    it('Негативный кейс, верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio8')
        cy.get('#loginButton ').click();
        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет');
        cy.get('#exitMessageButton').should('be.visible');
    })
    it('Негативный кейс, неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german8@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton ').click();
        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет');
        cy.get('#exitMessageButton').should('be.visible');
    })
    it('Негативный кейс валидации, невалидный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton ').click();
        cy.get('#messageHeader').should('have.text', 'Нужно исправить проблему валидации');
        cy.get('#exitMessageButton').should('be.visible');
    })
    it('Проверка приведения логина к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton ').click();
        cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно');
        cy.get('#exitMessageButton').should('be.visible');
    })
 })