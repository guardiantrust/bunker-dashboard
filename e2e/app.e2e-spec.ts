import { BunkerDashboardPage } from './app.po';

describe('bunker-dashboard App', () => {
  let page: BunkerDashboardPage;

  beforeEach(() => {
    page = new BunkerDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
