import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { signupPage } from './signup.page';
import { myclubsPage } from './myclubs.page';
import { browseclubsPage } from './browseclubs.page';
import { manageclubsPage } from './manageclubs.page';
import { createclubsPage } from './createclubs.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme', firstName: 'Admin', lastName: 'Test' };
const admin = { username: 'admin@foo.com', password: 'changeme' };
const club = 'American-Society-of-Civil-Engineers';

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

test('Test that signup works, then logout works', async (testController) => {
  const newUser = `user-${new Date().getTime()}@foo.com`;
  await navBar.gotoSignupPage(testController);
  await signupPage.isDisplayed(testController);
  await signupPage.signupUser(testController, newUser, credentials.password, credentials.firstName, credentials.lastName);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that join club and leave club works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoBrowseClubsPage(testController);
  await browseclubsPage.isDisplayed(testController);
  await browseclubsPage.joinClub(testController, club);
  await navBar.gotoMyClubsPage(testController);
  await myclubsPage.isDisplayed(testController);
  await myclubsPage.clubIsDisplayed(testController, club);
  await myclubsPage.leaveClub(testController, club);
});

test('Test that edit club works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoBrowseClubsPage(testController);
  await browseclubsPage.isDisplayed(testController);
  await browseclubsPage.joinClub(testController, club);
  await navBar.gotoManageAllClubsPage(testController);
  await manageclubsPage.isDisplayed(testController);
  await manageclubsPage.editClub(testController, club);
});

test('Test that create club works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoCreateClubsPage(testController);
  await createclubsPage.isDisplayed(testController);
  await createclubsPage.createClub(testController);
});

test('Test that delete club works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoManageAllClubsPage(testController);
  await manageclubsPage.isDisplayed(testController);
  await manageclubsPage.deleteClub(testController, club);
});
