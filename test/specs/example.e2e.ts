import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

    // if you want to debug code via browser.debug(), run yarn test:debug --spec example.e2e.ts
    // it increases mocha timeout and you can easily trying things

describe('My Login application', () => {
  it('should login with valid credentials', () => {
    LoginPage.open()
    browser.clickAndRun()

    LoginPage.login('tomsmith', 'SuperSecretPassword!')
    expect(SecurePage.flashAlert).toBeExisting()
    expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')

    browser.debug()
  })
})
