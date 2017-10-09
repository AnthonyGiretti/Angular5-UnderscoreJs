import { Angular4UnderscoreJsPage } from './app.po';

describe('angular4-underscore-js App', () => {
  let page: Angular4UnderscoreJsPage;

  beforeEach(() => {
    page = new Angular4UnderscoreJsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
