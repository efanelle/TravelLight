import { TravelLightPage } from './app.po';

describe('travel-light App', function() {
  let page: TravelLightPage;

  beforeEach(() => {
    page = new TravelLightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
