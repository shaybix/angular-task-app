import { AngularTaskAppPage } from './app.po';

describe('angular-task-app App', () => {
  let page: AngularTaskAppPage;

  beforeEach(() => {
    page = new AngularTaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
