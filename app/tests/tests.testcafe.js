import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { browseClubsPage } from './browseclubs.page';
import { manageClubsModeratorPage } from './manageclubs.page';
import { manageClubsAdminPage} from './manageclubsadmin.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'jenny@foo.com', password: 'changeme' };
const moderatorCredentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };
const club = { clubName: 'Accounting Club' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the Browse Clubs page', async (testController) => {
  await navBar.gotoBrowseClubsPage(testController);
  await browseClubsPage.isDisplayed(testController);
  await browseClubsPage.canSearch(testController, club.clubName);
  await browseClubsPage.hasCards(testController);
});

test('Test the Manage Clubs (moderator) page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, moderatorCredentials.username, moderatorCredentials.password);
  await navBar.gotoManageClubsModeratorPage(testController);
  await manageClubsModeratorPage.isDisplayed(testController);
});

test('Test the Manage Clubs (admin) page', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoManageClubsAdminPage(testController);
  await manageClubsAdminPage.isDisplayed(testController);
  // await manageClubsAdminPage.hasCards(testController);
});
