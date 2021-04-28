import { Selector } from 'testcafe';

class BrowseClubsPage {
  constructor() {
    this.pageId = '#browseclubs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }

  /** Joins a club that we consider the default club */
  async joinClub(testController, club) {
    this.defaultClub = `#${club}`;
    this.defaultClubSelector = Selector(this.defaultClub);
    this.defaultClubJoin = `${this.defaultClub}-join`;
    await testController.expect(this.defaultClubSelector.exists).ok();
    await testController.click(this.defaultClubJoin);
  }
}

export const browseclubsPage = new BrowseClubsPage();
