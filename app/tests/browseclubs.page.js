import { Selector } from 'testcafe';

class BrowseClubsPage {
  constructor() {
    this.pageId = '#browse-clubs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async canSearch(testController, clubName) {
    await testController.click('#search-bar');
    await testController.typeText('#search-bar', clubName);
    await testController.click('#search-button');
  }

  async hasCards(testController) {
    const cardCount = Selector('#club-card').count;
    await testController.expect(cardCount).gte(3);
  }
}

export const browseClubsPage = new BrowseClubsPage();
