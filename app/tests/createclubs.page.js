import { Selector } from 'testcafe';

class CreateClubsPage {
  constructor() {
    this.pageId = '#createclubs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(30000).expect(this.pageSelector.exists).ok();
  }

  /** Create a test club. */
  async createClub(testController) {
    await testController.typeText('#create-clubs-form-clubName', 'Test Club');
    await testController.typeText('#create-clubs-form-image', 'https://churchonthesound.org/wp-content/uploads/2020/03/This-is-a-test.jpg');
    await testController.typeText('#create-clubs-form-email', 'admin@foo.com');
    await testController.typeText('#create-clubs-form-website', 'https://youtube.com');
    await testController.typeText('#create-clubs-form-description', 'This is just a test club and it is going to be deleted soon.');
    await testController.click('#create-clubs-form-submit');
  }
}

export const createclubsPage = new CreateClubsPage();
