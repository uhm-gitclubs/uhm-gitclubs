import { Selector } from 'testcafe';

class ManageClubsPage {
  constructor() {
    this.pageId = '#manageallclubs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }

  /** Edits a club that we consider the default club */
  async editClub(testController, club) {
    this.defaultClub = `#${club}`;
    this.defaultClubSelector = Selector(this.defaultClub);
    this.defaultClubEdit = `${this.defaultClub}-edit`;
    this.defaultClubEditForm = Selector('#edit-form');
    await testController.expect(this.defaultClubSelector.exists).ok();
    await testController.click(this.defaultClubEdit);
    await testController.expect(this.defaultClubEditForm.exists).ok();
  }

  /** Delete a club based on the title of the club. */
  async deleteClub(testController, club) {
    await testController.click(`#${club}-delete`);
  }
}

export const manageclubsPage = new ManageClubsPage();
