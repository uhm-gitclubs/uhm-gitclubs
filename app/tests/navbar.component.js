import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  /** Go to the Browse Clubs Page. */
  async gotoBrowseClubsPage(testController) {
    await testController.click('#browseclubs-navbar');
  }

  /** Go to the My Clubs Page. */
  async gotoMyClubsPage(testController) {
    await testController.click('#myclubs-navbar');
  }

  /** Go to the Manage Clubs Page. */
  async gotoManageClubsPage(testController) {
    await testController.click('#manageclubs-navbar');
  }

  /** Go to the Create Clubs Page. */
  async gotoCreateClubsPage(testController) {
    await testController.click('#createclubs-navbar');
  }

  /** Go to the Manage Clubs Page. */
  async gotoManageAllClubsPage(testController) {
    await testController.click('#manageallclubs-navbar');
  }
}

export const navBar = new NavBar();
