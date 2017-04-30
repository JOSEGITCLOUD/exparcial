import { Angular4parcialPage } from './app.po';

describe('angular4parcial App', () => {
  let page: Angular4parcialPage;

  beforeEach(() => {
    page = new Angular4parcialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
