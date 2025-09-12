import { createBdd } from 'playwright-bdd';
import { RegistrationPage } from '../pages/RegistrationPage';
import dotenv from 'dotenv';

dotenv.config();;

const { Given, When, Then } = createBdd();

let registrationPage: RegistrationPage;

Given('I navigate to the registration page', async ({ page }) => {
  registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
});

When('I enter valid user details', async () => {
  const randomEmail = `user_${Date.now()}@example.com`; // unique email each run
  await registrationPage.startSignup('Priya', randomEmail);
  await registrationPage.fillAccountInfo(
    'Password123',
    'Priya',
    'Kaur',
    '123 Street',
    'NSW',
    'Sydney',
    '2000',
    '0400000000'
  );
});

When('I enter an existing email address', async () => {
  //  await registrationPage.startSignup('Priya', "priya1@example.com");
  await registrationPage.startSignup('Priya', process.env.USER_EMAIL!);
});

When('I submit the registration form', async () => {
  await registrationPage.submitRegistration();
});

When('I submit the signup details', async () => {
  await registrationPage.submitSignup();
});
Then('I should see the account created confirmation', async () => {
  await registrationPage.verifyAccountCreated();
});

Then('I should see an error message about existing email', async () => {
  await registrationPage.verifyEmailAlreadyExistsError();
});

When('I leave all fields empty', async () => {
  await registrationPage.leaveFieldsEmpty();
});

When('I enter invalid email format', async () => {
  await registrationPage.enterInvalidEmail();
});

When('I enter weak password', async () => {
  const randomEmail = `weak_${Date.now()}@example.com`;
  await registrationPage.enterWeakPassword(randomEmail);
});

Then('I should see required field error messages', async () => {
  await registrationPage.verifyRequiredFieldErrors();
});

Then('I should see an invalid email error', async () => {
  await registrationPage.verifyInvalidEmailError();
});

Then('I should see a weak password error', async () => {
  await registrationPage.verifyWeakPasswordError();
});
