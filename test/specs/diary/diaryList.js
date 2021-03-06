const {expect} = require('chai');
const loginAction = require('../../actions/loginAction');

const menuItemSelector = '//div[@id="site-menu"]//a[text() ="Diary"]';


describe('Diary List', () =>{

it('should have  main menu item Diary', () => {
  loginAction(browser);
  const isDisplayed = $(menuItemSelector).isDisplayed();
  expect(isDisplayed).to.be.true;
});

it('click to Diary in main menu should redirect to Diary list page', () => {
  const selectorMenuItem = '//div[@id="site-menu"]//a[text() ="Diary"]';
   $(menuItemSelector).click();
   const actualH1Text = $('//h1').getText();
  const expected = 'Day reports';
  
  expect(actualH1Text).to.eq(expected);
});

    //it('should have correct h1', () => {
     // const selector = '';
     // const element = $(selector);
     // const actual = element.getText();
     // const expected = '';
      
     // expect(actual).to.eq(expected);
   // });
  
  });