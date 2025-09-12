Priya Playwright Automation

🚀 Automated end-to-end testing suite for AutomationExercise
 using Playwright, TypeScript, and Playwright-BDD. This project covers major flows like Registration, Login, Cart operations, and Checkout, and implements a CI/CD pipeline with GitHub Actions for automated testing and Github Pages (HTML Test Report Deployment)..

📌 Features

✅ Playwright Native Runner

✅ BDD with Gherkin using playwright-bdd

✅ Page Object Model (POM)

✅ Covers full flows: Login, Registration, Cart, Checkout, Invoice Download

✅ TypeScript for type-safety

✅ ESLint + Prettier for clean code

✅ GitHub Actions CI/CD

✅ GitHub Pages Report

✅ Daily run with Email Notification

🏗️ Project Structure
```
priya-playwright-automation/
├── features/ # Gherkin feature files
│ ├── login.feature
│ ├── registration.feature
│ ├── cart.feature
│ ├── checkout.feature
│ └── ...
├── steps/ # Step definitions
│ ├── login.steps.ts
│ ├── registration.steps.ts
│ └── ...
├── pages/ # Page Object Model classes
│ ├── LoginPage.ts
│ ├── CartPage.ts
│ └── ...
├── .features-gen/ # Auto-generated tests from bddgen
├── playwright.config.ts # Playwright test config
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── .env
├── ci_cd.yml 
└── README.md

```
⚙️ Setup

Clone the repo

```
git clone https://github.com/priyakaurgit/playwright-bdd-automation.git
cd playwright-bdd-automation
```

Install dependencies
```
npm install
```

Configure the environment variables  
Add a .env file in the root folder:  

BASE_URL=https://automationexercise.com  
USER_EMAIL=`<your-email>`  
USER_PASSWORD=`<your-password>`  

⚠️ Note: The .env file is ignored by git, so you must create it locally.

▶️ Running Tests Locally

Generate BDD tests
```
npx bddgen
```

Run all tests:
```
npx playwright test
```

Run with UI mode:
```
npx playwright test --ui
```

Run only tagged scenarios:
```
npx playwright test --grep "@smoke"
```

🧹 Lint & Format

Check code quality:
```
npm run lint
```

Fix lint issues:
```
npm run lint:fix
```

Format code:
```
npm run format
```
📊 Reporting

HTML report is generated after test run:
```
npx playwright show-report
```

🚀 CI/CD (GitHub Actions)

This project includes a sample workflow (.github/workflows/ci-cd.yml) to run tests automatically on push and pull requests and also at 5 am daily.

🚀 GitHub Pages Report

After every run, the HTML test report is deployed to GitHub Pages:

URL format: `https://<username>.github.io/<repository-name>/`


🌐Environment Variables Git  
Name	Description  
BASE_URL	Application base URL  
USER_EMAIL	Test user email for login  
USER_PASSWORD	Test user password  
EMAIL_USERNAME	Gmail account for email notifications  
EMAIL_PASSWORD	Gmail app password (for GitHub Actions)  

🔒 Secrets are configured in GitHub Actions for secure CI/CD execution.

💡 Future Improvements  
   🔹 Cross-browser and mobile emulation testing.  
   🔹 API Testing  
   🔹 Add parallel test execution with sharding for faster runs.  
   🔹 Integrate Allure Reports for richer reporting (screenshots, videos, retries).  


🧑‍💻 Author

👩 Priya Kaur  
👥 LinkedIn: www.linkedin.com/in/priya-kaur-profile

📌 Portfolio Automation Project
