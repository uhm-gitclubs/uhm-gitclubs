import { Selector } from 'testcafe';

class MyClubsPage {
  constructor() {
    this.pageId = '#myclubs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }

  /** Checks that this page displays the club. */
  async clubIsDisplayed(testController, club) {
    this.defaultClub = '#'+club;
    this.defaultClubSelector = Selector(this.defaultClub);
    await testController.expect(this.defaultClubSelector.exists).ok();
  }

  /** Leaves the default club. */
  async leaveClub(testController, club) {
    this.defaultClub = '#'+club;
    this.defaultClubSelector = Selector(this.defaultClub);
    this.defaultClubLeave = '#'+club+'-leave';
    await testController.expect(this.defaultClubSelector.exists).ok();
    await testController.click(this.defaultClubLeave);
  }
}

export const myclubsPage = new MyClubsPage();
