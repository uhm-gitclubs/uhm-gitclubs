import { Selector } from 'testcafe';

class ManageClubsModeratorPage {
  constructor() {
    this.pageId = '#manage-clubs-moderator';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }
}

export const manageClubsModeratorPage = new ManageClubsModeratorPage();
