import { Angular2ContactListPage } from './app.po';

describe('angular2-contact-list App', function() {
  let page: Angular2ContactListPage;

  beforeEach(() => {
    page = new Angular2ContactListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
