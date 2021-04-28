import { Selector } from 'testcafe';

class ManageClubsAdminPage {
  constructor() {
    this.pageId = '#manage-clubs-admin-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async hasCards(testController) {
    const cardCount = Selector('#club-card').count;
    await testController.expect(cardCount).gte(3);
  }
}

export const manageClubsAdminPage = new ManageClubsAdminPage();
