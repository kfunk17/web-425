import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to funk-repair-site!');
  });
});
