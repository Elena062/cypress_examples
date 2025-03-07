describe('Автотест_покупка аватара', function () {

    it('покупка аватара и немного самодеятельности)', function () {
         cy.visit('https://pokemonbattle.ru/');                                        //Зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('lenka-penka81@list.ru');         //Ввести логин
         cy.get('#password').type('Testtr21');                                         //Ввести пароль
         cy.get('#password').should('have.attr', 'type', 'password');                  //Проверить, что символы пароля заменены звёздочками
         cy.get('.auth__input-icon').should('be.visible');                             //Проверить что иконка с глазом видна
         cy.get('.auth__input-icon').click({ force: true });                                          //Нажать на иконку с глазом
         cy.get('.auth__input-icon').should('have.class', 'view-pass');                //Проверить, что иконка изменилась (зачеркнутый глаз)
         cy.get('#password').should('have.attr', 'type', 'text');                      //Проверить, что пароль стал видимым
         cy.get('.auth__button').should('have.css', 'background', 'rgb(237, 111, 45) none repeat scroll 0% 0% / auto padding-box border-box');   //Проверить цвет кнопки (еще бы разобраться с остальными свойствами, и почему их нельзя проверить по отдельности)
         cy.get('.auth__button').should('have.text', 'Войти')                          
         cy.get('.auth__button').click({ force: true });                                                //Нажать кнопку
         cy.get('.header__container > .header__id').click();                             //Зайти на страницу тренера
         cy.get('[href="/shop"]').click();                                         //Зайти
         cy.get('.available > button').first().click({ force: true });               //выбрать первый доступный аватар
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(4620869113632996); //Вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0526');                       //Вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');       //Вводим CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('PETR IVANOV')        //Имя владельца
         cy.get('.pay-btn').click({ force: true });                                                        //Кнопка "Оплатить"
         cy.get('#cardnumber').type('56456');                                              //Вводим проверочный код
         cy.get('.payment__submit-button').click({ force: true });                                        // 
         cy.contains('Покупка прошла успешно').should('be.visible');                       //Проверяем наличие и видимость сообщения об успешной покупке
     })
})